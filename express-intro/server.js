import express from 'express';

const app = express();

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 8080');
});
