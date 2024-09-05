// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file from the previous exercise. The comments.html file should be in the same directory as the comments.js file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('comments.html', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Error reading file');
    } else {
      res.end(data);
    }
  });
});

server.listen(3000);
console.log('Server listening on port 3000');
// The server is listening on port 3000 and serving the comments.html file. The file is read from the disk and sent to the client when a request is made to the server. If there is an error reading the file, the server responds with an error message.
