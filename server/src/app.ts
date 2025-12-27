import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use(bodyParser.json());
app.use(cookieParser());

export default app;