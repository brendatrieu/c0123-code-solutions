import { readFile } from 'node:fs/promises';

function promiseReadFile() {
  const filePath = process.argv[2];
  readFile(filePath, 'utf8')
    .then((content) => console.log(content))
    .catch((err) => console.error(err));
}

promiseReadFile();
