import { writeFile } from 'node:fs';

const data = `${Math.random()}
`;

writeFile('random.txt', data, { flag: 'a' }, (err) => {
  if (err) {
    console.error(err);
  }
});
