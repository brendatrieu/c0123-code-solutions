import express from 'express';

const app = express();
// const nextId = 1;
const grades = {};
app.get('/api/grades', (req, res, next) => {
  res.json(Object.values(grades));
  return next();
});
app.listen(8080, (req, res) => console.log('Port 8080 is now live'));
