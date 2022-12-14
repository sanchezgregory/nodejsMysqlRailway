import express from 'express'
import {conn} from "./db.js";

const app = express();

app.get('/', async (req, res) => {
   // Siempre responde con rows, es lo que se debe usar;
   const [rows] = await conn.query(`SELECT * FROM users`);
   res.json(rows);
});

app.get('/ping', async (req, res) => {
   const [result] = await conn.query(`Select "run hello" as result`);
   console.log(result[0].result)
   res.send(result[0]);
});

app.get('/create', async (req, res) => {
   const query = await conn.query(`INSERT INTO users(name,email,password) VALUES ("asd","qwe@asd.com", "qwerasdfzdxzazdfas")`);
   res.json(query);
})

app.listen(3000)
console.log('Server listening on port 3000');