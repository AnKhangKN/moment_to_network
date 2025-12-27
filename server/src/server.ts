import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const PORT = Number(process.env.PORT_BE) || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
