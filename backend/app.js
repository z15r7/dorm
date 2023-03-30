// module
import express from 'express';
import cors from 'cors';

// data

// methods

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});

app.get('*', (req, res) => {
  const data = req.body;
  const result = { data, success: false, error: 'error.' };
  res.send(result);
});
