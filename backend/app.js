const express = require('express');

const helmet = require('helmet');

const app = express();

const PORT = 3030;

app.use(helmet());

app.get('/health_check', (req, res) => {
  res.json({ status: 'application running' });
});

app.listen(PORT, async () => {
  console.log(`Server connnected on port ${PORT}`);
});
