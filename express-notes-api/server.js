import express from 'express';
import { writeFile, readFile } from 'node:fs/promises';

// --- Reusable functions ---
function handleError(res, err) {
  console.error('/api/notes error', err);
  res.status(500).json({ error: 'An unexpected error occurred.' });
}

function evaluateId(res, journal, id) {
  const validIds = Object.keys(journal.notes);
  const errorMsg = `${id} is not a valid ID. Please provide a valid ID: ${validIds.join(', ')}`;
  if (isNaN(id) || Number(id) < 0) {
    res.status(400).send(errorMsg);
  } else if (!validIds.includes(id)) {
    res.status(404).send(errorMsg);
  } else {
    return true;
  }
}

function evalReqBody(req, res) {
  const userInputs = Object.keys(req.body);
  if (!userInputs.includes('content') || userInputs.length > 1) {
    res.status(400).send(`Input: ${JSON.stringify(req.body)}
Be advised only notes assigned to "content" will be processed. Please try again.`);
  } else {
    return true;
  }
}

function evalParamsOnly(req, res) {
  const userInputs = Object.keys(req.body);
  if (userInputs.length > 0) {
    res.status(400).send(`Input: ${JSON.stringify(req.body)}
Be advised the above inputs were not be processed. Please try again.`);
  } else {
    return true;
  }
}

/** Takes an Express response and user-provided id as inputs.
 *  If there is an ID, return the entry for that given ID. Otherwise, return all entries. */
async function loadNotes(res, id) {
  const data = await readFile('data.json', 'utf8');
  const dataJson = JSON.parse(data);
  if (id) {
    if (evaluateId(res, dataJson, id)) {
      return dataJson.notes[id];
    }
  } else {
    return dataJson;
  }
}

async function uploadNotes(res, input) {
  const newNotes = JSON.stringify(input);
  await writeFile('data.json', newNotes);
}

// --- Express and middleware functions ---
const app = express();

app.use(express.json());

app.get('/api/notes', async (req, res) => {
  try {
    const journal = await loadNotes(res);
    evalParamsOnly(req, res);
    res.status(200).json(journal.notes);
  } catch (err) {
    handleError(res, err);
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const journal = await loadNotes(res, id);
    evalParamsOnly(req, res);
    res.status(200).json(journal);
  } catch (err) {
    handleError(res, err);
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    if (!evalReqBody(req, res, 'post')) {
      return;
    }
    const journal = await loadNotes(res);
    const { nextId } = journal;
    journal.notes[nextId] = { id: nextId, content: req.body.content };
    journal.nextId++;
    await uploadNotes(res, journal);
    res.status(201).json(journal.notes[nextId]);
  } catch (err) {
    handleError(res, err);
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    if (!evalParamsOnly(req, res)) {
      return;
    }
    const { id } = req.params;
    const journal = await loadNotes(res);
    if (!evaluateId(res, journal, id)) {
      return;
    }
    delete journal.notes[id];
    await uploadNotes(res, journal);
    res.sendStatus(204);
  } catch (err) {
    handleError(res, err);
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const journal = await loadNotes(res);
    if (!evaluateId(res, journal, id)) {
      return;
    }
    if (!evalReqBody(req, res, 'put')) {
      return;
    }
    journal.notes[id].content = req.body.content;
    await uploadNotes(res, journal);
    res.status(200).json(journal.notes[id]);
  } catch (err) {
    handleError(res, err);
  }
});

app.listen(8080, console.log('Port 8080 is connected'));
