import express from 'express';
import pg from 'pg';

const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

// ---- Reusable functions ----
function handleError(res, err) {
  console.error('/api/grades error', err);
  res.status(500).json({ error: 'An unexpected error occurred.' });
}

function evalParamId(res, id) {
  if (isNaN(id) || Number(id) < 0 || !Number.isInteger(id)) {
    res.status(400).json({ error: "'gradeId' must be a positive integer." });
  } else {
    return true;
  }
}

function evalReqBody(req, res) {
  const userInputs = req.body;
  const score = userInputs.score;
  const inputKeys = Object.keys(userInputs);
  const reqKeys = ['course', 'name', 'score'];
  if (inputKeys.length < 3) {
    res.status(400).json({
      error: "Must include 'course', 'name', and 'score'. Please try again."
    });
    return false;
  }
  if (inputKeys.length > 3) {
    res.status(400).json({
      error: "Only 'course', 'name', and 'score' would be processed. Please try again."
    });
    return false;
  }
  for (const key of inputKeys) {
    if (reqKeys.indexOf(key) === -1) {
      res.status(400).json({
        error: "Only 'course', 'name', and 'score' would be processed. Please try again."
      });
      return false;
    }
    if (!userInputs[key]) {
      res.status(400).json({
        error: `'${key}' was left blank. Please resubmit and include a value for '${key}'.`
      });
      return false;
    }
  }
  if (isNaN(score) || Number(score) < 0) {
    res.status(400).json({ error: `${score} is not a valid 'score'. Scores must be positive numbers.` });
    return false;
  } else {
    return userInputs;
  }
}

async function loadGrades(res) {
  const sql = `
    SELECT *
    FROM "grades";
  `;
  const result = await db.query(sql);
  if (result) {
    return result.rows;
  } else {
    return false;
  }
}

async function loadGradeId(res, id) {
  const sql = `
    SELECT *
    FROM "grades"
    WHERE "gradeId" = $1;
  `;
  const params = [id];
  const result = await db.query(sql, params);
  const grade = result.rows[0];
  if (grade) {
    return grade;
  } else {
    res.status(404).json({ error: `Cannot find grade with gradeId: ${id}` });
    return false;
  }
}

app.get('/api/grades', async (req, res) => {
  try {
    const result = await loadGrades();
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: 'Grades table is currently empty.' });
    }
  } catch (err) {
    handleError(res, err);
  }
});

app.get('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!evalParamId(res, gradeId)) {
      return;
    }
    const grade = await loadGradeId(res, gradeId);
    if (grade) {
      res.json(grade);
    }
  } catch (err) {
    handleError(res, err);
  }
});

app.post('/api/grades', async (req, res) => {
  try {
    const userInputs = evalReqBody(req, res);
    if (!userInputs) {
      return;
    }
    const sql = `
      INSERT INTO "grades" ("course", "name", "score")
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const { course, name, score } = userInputs;
    const params = [course, name, score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (grade) {
      res.json(grade);
    }
  } catch (err) {
    handleError(res, err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!evalParamId(res, gradeId)) {
      return;
    }
    const grade = await loadGradeId(res, gradeId);
    if (!grade) {
      return;
    }
    const sql = `
      DELETE FROM "grades"
      WHERE "gradeId" = $1
    `;
    const params = [gradeId];
    await db.query(sql, params);
    res.sendStatus(204);
  } catch (err) {
    handleError(res, err);
  }
});

app.put('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!evalParamId(res, gradeId)) {
      return;
    }
    const userInputs = evalReqBody(req, res);
    if (!userInputs) {
      return;
    }
    const sql = `
      UPDATE "grades"
        SET "course" = $2,
          "name" = $3,
          "score" = $4
      WHERE "gradeId" = $1
      RETURNING *;
    `;
    const { course, name, score } = userInputs;
    const params = [gradeId, course, name, score];
    const result = await db.query(sql, params);
    const newGrade = result.rows[0];
    if (newGrade) {
      res.json(newGrade);
    } else {
      res.status(404).json({ error: `Cannot find grade with gradeId: ${gradeId}` });
    }
  } catch (err) {
    handleError(res, err);
  }
});

app.listen(8080, (req, res) => console.log('Port 8080 is now live!'));
