import { writeFile } from 'node:fs/promises';
import { readFileSync } from 'node:fs';

// ------- Sets up a function and variables to handle user inputs -------
const allInputs = process.argv;
const action = process.argv[2];
const arg3 = process.argv[3];
const arg4 = process.argv[4];
const legalActions = ['read', 'create', 'update', 'delete'];

async function interpretInputs() {
  try {
    switch (action) {
      case 'read':
        await readNotes();
        break;
      case 'create':
        await newNote(arg3);
        break;
      case 'update':
        await updateNote(arg3, arg4);
        break;
      case 'delete':
        await deleteNote(arg3);
        break;
      default:
        console.error(action, 'is not an acceptable action. Please try again with:', legalActions);
        process.exit(1);
    }
  } catch (err) {
    handleError(err);
  }
}

// ------- Reusable functions -------

function handleError(err) {
  console.error(err);
  process.exit(1);
}

/** Reviews the ID of interest and sees whether it is numerical and an ID that exists within the working database, then exits the process */
function evaluateId(notes, id) {
  const validIds = Object.keys(notes);

  if (typeof Number(id) !== 'number' || !validIds.includes(id)) {
    console.error(id, 'is not a valid ID. Please provide a valid ID:', validIds.join(', '));
    process.exit(1);
  }
}

/** Prints a message to notify the user that they inputted too many arguments, then exits the process */
function tooManyNotes() {
  console.error('Please note only one note at a time can be inputted. Try again and ensure your note is enclosed in quotation marks.');
  process.exit(1);
}

/** Reads the data file and parses it into a usable form. If the user passes in a desired item, then returns that part of the object only */
async function getJournal(item) {
  try {
    const journal = await readFileSync('data.json', 'utf8');
    const journalJson = JSON.parse(journal);
    if (item) {
      return journalJson[item];
    }
    return journalJson;
  } catch (err) {
    handleError(err);
  }
}

/** Takes the input, stringifies it, and writes the output over the data file */
async function writeJournal(input) {
  try {
    const newJournal = JSON.stringify(input);
    await writeFile('data.json', newJournal);
  } catch (err) {
    handleError(err);
  }
}

// ------- Action functions -------

async function readNotes() {
  try {
    const journalNotes = await getJournal('notes');
    for (const note in journalNotes) {
      JSON.stringify(note, null, 2);
      console.log(`${note}: ${journalNotes[note]}`);
    }
  } catch (err) {
    handleError(err);
  }
}

async function newNote(note) {
  try {
    if (allInputs.length > 4) {
      tooManyNotes();
    }
    const journal = await getJournal();
    const nextId = await getJournal('nextId');

    journal.notes[nextId] = note;
    journal.nextId = nextId + 1;
    await writeJournal(journal);
  } catch (err) {
    handleError(err);
  }
}

async function updateNote(id, note) {
  try {
    const noteEntries = await getJournal('notes');
    evaluateId(id, noteEntries);

    if (allInputs.length > 5) {
      tooManyNotes();
    }

    const journal = await getJournal();

    journal.notes[id] = note;
    await writeJournal(journal);
  } catch (err) {
    handleError(err);
  }
}

async function deleteNote(id) {
  try {
    const noteEntries = await getJournal('notes');
    evaluateId(id, noteEntries);

    if (allInputs.length > 4) {
      const remainder = allInputs.splice(4);
      console.error('Be advised, the following was not processed:', remainder.join(' '), 'Please try delete action again without notes.');
      process.exit(1);
    }

    const journal = await getJournal();

    delete journal.notes[id];
    await writeJournal(journal);
  } catch (err) {
    handleError(err);
  }
}

await interpretInputs();
