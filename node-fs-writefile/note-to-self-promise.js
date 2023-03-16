import { writeFile } from 'node:fs/promises';

const [, , ...notes] = process.argv;
const inputtedNotes = `${notes.join('\n')}
`;

writeFile('note.txt', inputtedNotes, { flag: 'a' })
  .then((note) => note)
  .catch((err) => console.error(err));
