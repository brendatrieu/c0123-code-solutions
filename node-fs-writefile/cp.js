import { writeFile, readFile } from 'node:fs/promises';

const [, , origFile, newFile] = process.argv;

if (!origFile.endsWith('.txt')) {
  console.error('Source file must be .txt format');
  process.exit(1);
}
if (!newFile.endsWith('.txt')) {
  console.error('Destination file must be .txt format');
  process.exit(1);
}

readFile(origFile, 'utf8')
  .then((value) => writeFile(newFile, value))
  .catch((readErr) => console.error(readErr));
