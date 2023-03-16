import { readFile } from 'node:fs/promises';

function readTxtFiles() {
  const filePath = './dijkstra.txt';
  readFile(filePath, 'utf8')
    .then((contents) => console.log(contents))
    .catch((err) => console.error(err.message));
}

readTxtFiles();
