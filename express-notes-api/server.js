import express from 'express';
// import { writeFile } from 'node:fs/promises';
import { readFileSync } from 'node:fs';

// --- Reusable functions ---
function handleError(res, err) {
  console.error('/api/notes error', err);
  res.status(500).send(err.message);
}

/** Evaluates the user-inputted ID.
 *  If the ID is not a valid number, status 400 will be sent to indicate an input error.
 *  If the ID is not present in the data, status 404 will be sent to indicate data was not found. */
function evaluateId(res, journal, id) {
  const validIds = Object.keys(journal.notes);
  const errorMsg = `${id} is not a valid ID. Please provide a valid ID: ${validIds.join(', ')}`;
  if (isNaN(id) || Number(id) < 0) {
    return res.status(400).send(errorMsg);
  }
  if (!validIds.includes(id)) {
    res.status(404).send(errorMsg);
  }
}

/** Takes an Express response and user-provided id as inputs.
 *  If there is an ID, return the entry for that given ID. Otherwise, return all entries. */
async function loadNotes(res, id) {
  try {
    const data = await readFileSync('data.json', 'utf8');
    const dataJson = JSON.parse(data);
    if (id) {
      evaluateId(res, dataJson, id);
      return dataJson.notes[id];
    }
    return dataJson.notes;
  } catch (err) {
    handleError(res, err);
  }
}

// async function uploadNotes(input) {
//   try {
//     const newNotes = JSON.stringify(input);
//     await writeFile('data.json', newNotes);
//   } catch (err) {
//     handleError(err);
//   }
// }

// --- HTTPie handlers and middleware functions ---
const app = express();

app.use(express.json());

app.get('/api/notes', async (req, res) => {
  try {
    const journal = await loadNotes(res);
    res.status(200).send(journal);
  } catch (err) {
    handleError(res, err);
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    if (req.params.id) {
      const noteId = req.params.id;
      const notes = await loadNotes(res, noteId);
      res.status(200).send(notes);
    }
  } catch (err) {
    handleError(res, err);
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    if (!Object.keys(req.body).includes('content')) {
      return res.status(400).send('Only notes assigned to "content" will be processed.');
    }
    res.send(req.body);
  } catch (err) {
    handleError(res, err);
  }
});

app.listen(8080, console.log('Port 8080 is connected'));
