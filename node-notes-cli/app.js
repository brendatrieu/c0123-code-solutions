import { writeFile } from 'node:fs/promises';
import { readFileSync } from 'node:fs';

// Set up function and variables to handle user inputs
const action = process.argv[2];
const arg3 = process.argv[3];
const arg4 = process.argv[4];
const legalActions = ['read', 'create', 'update', 'delete'];

function interpretInputs() {
  switch (action) {
    case 'read':
      readNotes();
      break;
    case 'create':
      newNote();
      break;
    case 'update':
      updateNote();
      break;
    case 'delete':
      deleteNote();
      break;
    default:
      console.error(action, 'is not an acceptable action. Please try again with:', legalActions);
      process.exit(1);
  }
}

/**
 * Reusable functions
 */

// Catch error handling
function handleError(err) {
  console.error(err);
  process.exit(1);
}

// Evaluate ID
async function evaluateId() {
  try {
    const notes = await getJournal('notes');
    const validIds = Object.keys(notes);

    if (typeof Number(arg3) !== 'number' || !validIds.includes(arg3)) {
      console.error(arg3, 'is not a valid ID. Please provide a valid ID:', validIds.join(', '));
      process.exit(1);
    }
  } catch (err) {
    handleError();
  }
}

// Multiple notes
function tooManyNotes() {
  console.error('Please note only one note at a time can be inputted. Try again and ensure your note is enclosed in quotation marks.');
  process.exit(1);
}

// Journal retrieval
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

// Journal update
async function writeJournal(input) {
  try {
    await writeFile('data.json', input);
  } catch (err) {
    handleError(err);
  }
}

/**
 * Action functions
 */

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

async function newNote() {
  try {
    if (process.argv.length > 4) {
      tooManyNotes();
    }
    const journal = await getJournal();
    const nextId = await getJournal('nextId');
    let newJournal = null;

    journal.notes[nextId] = arg3;
    journal.nextId = nextId + 1;
    newJournal = JSON.stringify(journal);
    writeJournal(newJournal);
  } catch (err) {
    handleError(err);
  }
}

async function updateNote() {
  try {
    await evaluateId();

    if (process.argv.length > 5) {
      tooManyNotes();
    }

    const journal = await getJournal();
    let newJournal = null;

    journal.notes[arg3] = arg4;
    newJournal = JSON.stringify(journal);
    writeJournal(newJournal);
  } catch (err) {
    handleError(err);
  }
}

async function deleteNote() {
  try {
    await evaluateId();

    const journal = await getJournal();
    let newJournal = null;

    if (process.argv.length > 4) {
      const remainder = process.argv.splice(4);
      console.log('Be advised, the following was not processed:', remainder.join(' '));
    }

    delete journal.notes[arg3];
    newJournal = JSON.stringify(journal);
    writeJournal(newJournal);
  } catch (err) {
    handleError(err);
  }
}

interpretInputs();
