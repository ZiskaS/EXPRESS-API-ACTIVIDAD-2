const express = require('express');
const createError = require('http-errors');
const app = express();
const postsRoute = require('./config/route.config');
const dbConfig = require('./config/db.config');

// Use body-parser middleware to parse JSON data
app.use(express.json());

// Connect to the MongoDB database
dbConfig.connect();

// Use the postsRoute middleware for /api/posts route
app.use('/api/posts', postsRoute);

// Route to handle the default route '/'
app.get('/', (req, res) => {
  res.send('Welcome to My Express API');
});

// Error Handling for Route Not Found
app.use((req, res, next) => {
  next(createError(404, 'Route not found'));
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.info(`Application running at port ${port}`);
  console.log('Ready!');
});
