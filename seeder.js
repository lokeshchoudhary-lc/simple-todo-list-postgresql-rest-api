const db = require('./db/index');

const seed = async () => {
  await db.query('CREATE DATABASE todos');
  await db.query(`CREATE TABLE todos(
    id Serial Primary Key,
    title varchar ,
    body varchar ,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`);
  await db.query('INSERT INTO todos(title, body) VALUES($1,$2)', [
    'test title',
    'test body',
  ]);
};

seed()
  .then(console.log('Seeding Successfully'))
  .catch((err) => console.log(err));
