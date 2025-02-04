// Create web server that can accept POST requests to /comments
// and save them in a file
// The file should contain a list of comments

const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.post('/comments', (req, res) => {
  console.log(req.body);
  const comments = req.body;
  fs.writeFile('comments.json', JSON.stringify(comments), (err) => {
    if (err) {
      res.status(500).send('Error saving comments');
    } else {
      res.send('Comments saved');
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
