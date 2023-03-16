import * as fs from 'node:fs';

fs.readFile('./dijkstra.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
