const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/home.html') {
    let filePath = path.join(__dirname, 'public', 'home.html')
    fs.readFile(filePath, 'utf8', (err, data) => {
      res.writeHead(200, { 'content-Type': 'text/html' })
      res.end(data);
    })
  }
  if (req.url === '/About.html') {
    let filePath = path.join(__dirname, 'public', 'About.html')
    fs.readFile(filePath, 'utf8', (err, data) => {
      res.writeHead(200, { 'content-Type': 'text/html' })
      res.end(data);
    })
  }
  if (req.url === '/Contact.html') {
    let filePath = path.join(__dirname, 'public', 'Contact.html')
    fs.readFile(filePath, 'utf8', (err, data) => {
      res.writeHead(200, { 'content-Type': 'text/html' })
      res.end(data);
    })
  }
})


const port = 2000
server.listen(port, () => {
  console.log(`server is listening to ${port}`)
})
