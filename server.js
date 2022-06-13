// library
const express = require('express');
const gameListRouter = require('./routes/gameList');
// middleware
const logger = require('./middleware/logger');

const app = express();
const PORT = 8080;

// app.listen
app.use(logger);

app.get('/', (req, res) => {
  res.send("Hello World");
  
  // res.sendStatus(500);
});

// TODO: setup env file
app.use('/api/gameList', gameListRouter);



// サーバーを起動する
app.listen(PORT);