import { writeFile } from 'node:fs';

const [, , ...notes] = process.argv;
const inputtedNotes = `${notes.join('\n')}
`;

writeFile('note.txt', inputtedNotes, { flag: 'a' }, (err) => {
  if (err) {
    return console.error(err);
  }
});
