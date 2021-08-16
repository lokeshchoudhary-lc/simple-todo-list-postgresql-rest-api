const createError = require('http-errors');

const db = require('../db/index');

module.exports = {
  showTodos: async (_req, res, next) => {
    try {
      const todos = await db.query('SELECT * FROM todos');

      if (todos.rowCount === 0) {
        throw createError.NotFound('No todos Found');
      }

      res.json(todos.rows);
    } catch (err) {
      next(err);
    }
  },
  showSingleTodo: async (req, _res, next) => {
    try {
      const { id } = req.params;
      const todo = await db.query('SELECT * FROM todos WHERE id =$1', [id]);
      if (todo.rowCount === 0) {
        throw createError.NotFound(`No todo with the id ${id}`);
      }
    } catch (err) {
      next(err);
    }
  },
  createTodo: async (req, res, next) => {
    try {
      const { title, body } = req.body;
      const result = await db.query(
        'INSERT INTO todos (title, body) VALUES($1,$2) RETURNING *',
        [title, body]
      );

      res.json(result.rows);
    } catch (err) {
      next(err);
    }
  },
  updateTodo: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { title, body } = req.body;

      const result = await db.query(
        'UPDATE todos SET title=$1,body=$2 WHERE id=$3 RETURNING *',
        [title, body, id]
      );

      res.json(result.rows);
    } catch (err) {
      next(err);
    }
  },
  deleteTodo: async (req, res, next) => {
    try {
      const { id } = req.params;
      await db.query('DELETE FROM todos WHERE id = $1', [id]);
      res.json('Delete todo');
    } catch (err) {
      next(err);
    }
  },
};
