import express from 'express';

const app = express();
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => res.json(Object.values(grades)));

app.delete('/api/grades/:id', (req, res) => {
  delete grades[req.params.id];
  return res.status(200).send(`Grade ID ${req.params.id} was deleted.`);
});

app.listen(8080, () => console.log('Port 8080 is connected'));
