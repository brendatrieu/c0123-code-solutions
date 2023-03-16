import { readFile } from 'node:fs/promises';

const [, , ...filePaths] = process.argv;

const allPromises = filePaths.map((path) => {
  if (!path.endsWith('.txt')) {
    return Promise.resolve(`invalid path: ${path} \n`);
  }
  return readFile(path, 'utf8');
});

Promise.all(allPromises)
  .then((files) => console.log(files.join('\n')))
  .catch((err) => console.error(err));
