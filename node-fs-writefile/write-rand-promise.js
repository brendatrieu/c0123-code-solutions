import { writeFile } from 'node:fs/promises';

const data = `${Math.random()}
`;

writeFile('random.txt', data, { flag: 'a' })
  .then((newNum) => newNum)
  .catch((err) => console.error(err));
