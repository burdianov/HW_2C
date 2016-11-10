import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const REG_TEST = /^(?:[^:]*:)?(?:\/{2})?(?:[^\/]*(?=\/))?\/?@?([^\/\?#]*).*/;
const INVALID_USERNAME = 'Invalid username';

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/task2C', (req, res) => {
  var dirtyName;
  if (req.query.hasOwnProperty('username')) {
    dirtyName = req.query.username;
  } else {
    dirtyName = INVALID_USERNAME;
  }

  var cleanName = dirtyName.replace(REG_TEST, '@$1');
  res.status(200).send(cleanName.toString());
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
