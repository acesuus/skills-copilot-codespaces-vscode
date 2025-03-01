// Create web server
// Create route
// Create middleware
// Create controller

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create route
const comments = require('./routes/comments');

// 3. Create middleware
app.use(express.json());

// 4. Create controller
app.use('/comments', comments);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});