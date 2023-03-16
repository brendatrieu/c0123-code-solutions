import { readFile } from 'node:fs/promises';

function readAll() {
  const [, , ...filePaths] = process.argv;
  filePaths.forEach((path) => {
    if (path.endsWith('.txt')) {
      return;
    }
    readFile(path, 'utf8')
      .then((contents) => console.log(contents))
      .catch((err) => console.error(err));
  });
}

readAll();
