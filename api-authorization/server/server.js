import 'dotenv/config';
import pg from 'pg';
import argon2 from 'argon2';
import express from 'express';
import jwt from 'jsonwebtoken';
import { ClientError, errorMiddleware, authorizationMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();
app.use(express.json());

app.post('/api/auth/sign-up', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ClientError(400, 'username and password are required fields');
    }
    const hashedPassword = await argon2.hash(password);
    const sql = `
      insert into "users" ("username", "hashedPassword")
      values ($1, $2)
      returning *
    `;
    const params = [username, hashedPassword];
    const result = await db.query(sql, params);
    const [user] = result.rows;
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

app.post('/api/auth/sign-in', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ClientError(401, 'invalid login');
    }
    const sql = `
      select "userId",
            "hashedPassword"
        from "users"
      where "username" = $1
    `;
    const params = [username];
    const result = await db.query(sql, params);
    const [user] = result.rows;
    if (!user) {
      throw new ClientError(401, 'invalid login');
    }
    const { userId, hashedPassword } = user;
    if (!await argon2.verify(hashedPassword, password)) {
      throw new ClientError(401, 'invalid login');
    }
    const payload = { userId, username };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET);
    res.json({ token, user: payload });
  } catch (err) {
    next(err);
  }
});

/* ⛔ Every route after this middleware requires a token! ⛔ */

app.use(authorizationMiddleware);

app.post('/api/flashcards', async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { question, answer } = req.body;
    if (!question || !answer) {
      throw new ClientError(400, 'question and answer are required fields');
    }
    const sql = `
      insert into "flashcards" ("userId", "question", "answer")
      values ($1, $2, $3)
      returning *
    `;
    const params = [userId, question, answer];
    const result = await db.query(sql, params);
    const [flashcard] = result.rows;
    res.status(201).json(flashcard);
  } catch (err) {
    next(err);
  }
});

app.get('/api/flashcards', async (req, res, next) => {
  try {
    const { userId } = req.user;
    const sql = `
      select *
        from "flashcards"
        where "userId" = $1
    `;
    const params = [userId];
    const result = await db.query(sql, params);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
