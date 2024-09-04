const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');
const { db } = require('./src/config');
const { userRouter } = require('./src/routes/users');

const app = express();

app.use(cors());
app.use(bodyParse.json());

// Define the /health endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/api', userRouter);

const port = process.env.PORT || 3000;

// Initialize Sequelize and sync models with the database
db.sequelize
  .sync()
  .then(() => {
    console.log('Database synchronized.');
    return app.listen(port, () => {
      console.log('listening on port', port);
    });
  })
  .catch((err) => {
    console.log('Failed to sync database:', err);
  });
