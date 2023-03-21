import express from 'express';

const app = express();
let nextId = 1;
const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => res.json(Object.values(grades)));

app.post('/api/grades', (req, res) => {
  grades[nextId] = { ...req.body, id: nextId };
  res.status(201).send(grades[nextId]);
  return nextId++;
});

app.listen(8080, () => console.log('Port 8080 is now live'));
