import { writeFile } from 'node:fs/promises';

const data = `${Math.random()}
`;

writeFile('random.txt', data, { flag: 'a' })
  .catch((err) => console.error(err));
