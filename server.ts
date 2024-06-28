import express from 'express';

const app = express();
app.use(express.json())

const users = []

app.post('/users', (req, res) => {
  users.push(req.body)

  res.status(201).json(users)
  res.send('Welcome post')
}) //Submit users

app.get('/users', (req, res) => {
  res.status(200).json(users)
  res.send('Ok')
}) //list users

app.listen(3000)

console.log('hello world');