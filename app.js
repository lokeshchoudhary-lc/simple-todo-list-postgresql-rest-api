const express = require('express');

const createError = require('http-errors');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World 😀');
});

const todo = require('./routes/todo');

app.use('/todo', todo);

app.use(async (req, res, next) => {
  const error = createError.NotFound();
  next(error);
});

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(PORT, () => console.log(`Running Server On Port ${PORT} 🚀`));
