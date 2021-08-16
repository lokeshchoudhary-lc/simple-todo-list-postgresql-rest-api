const Router = require('express').Router();

const {
  showTodos,
  showSingleTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require('../controller/todo.controller');

Router.get('/', showTodos);

Router.get('/:id', showSingleTodo);

Router.post('/', createTodo);

Router.put('/:id', updateTodo);

Router.delete('/:id', deleteTodo);

module.exports = Router;
