**Simple Todo List**

_Made with :_

- Node

_Steps to run application :_

> `git clone https://github.com/lokeshchoudhary-lc/simple-todo-list-postgresql-rest-api.git`

> `npm install`

> `npm start`

_Npm Packages Used :_

- Expressjs
- pg
- https-errors
- cors
- nodemon (dev)

**For linting and code formating**

- Eslint (AirBnb config)
- Prettier

> [!NOTE]
> If you have VScode then install Prettier and ESlint extension

---

**Routes**

| Path     | Method | Params | Return         |
| -------- | ------ | ------ | -------------- |
| 'todos/' | GET    | none   | all todos list |

| Path        | Method | Params | Return      |
| ----------- | ------ | ------ | ----------- |
| 'todos/:id' | GET    | id     | single todo |

| Path     | Method | Body             | Return       |
| -------- | ------ | ---------------- | ------------ |
| 'todos/' | POST   | {'title','body'} | created todo |

| Path        | Method | Body             | Return       |
| ----------- | ------ | ---------------- | ------------ |
| 'todos/:id' | PUT    | {'title','body'} | updated todo |

| Path        | Method | Params | Return |
| ----------- | ------ | ------ | ------ |
| 'todos/:id' | DELETE | id     | none   |
