const express = require('express');

const cors = require('cors');

const jokes = require('./jokes/jokes');

const app = express();

const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the Joke API!');
});

app.get('/random-joke', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const randomJoke = jokes[randomIndex];

  res.json(randomJoke);
});

app.listen(port, () => {
  console.log(`Joke API Listening at http://localhost:${port}`);
});

   
    