/**
 * Lab 1: Node.js and Express Server
 * Built-in HTTP Server Implementation
 * 
 * Student: Y. SRAAVAN
 * Registration Number: 252U1R1264
 * Section: CSE-2E & 211(S-6)
 */

const http = require('http');

const PORT = process.env.PORT || 3000;

// Create the HTTP server using Node.js built-in http module
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Hello');
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({
      error: '404 - Route Not Found',
      message: `The requested path '${req.url}' does not exist on this server.`,
      statusCode: 404
    }));
  }
});

// Start listening on port 3000
server.listen(PORT, () => {
  console.log(`[HTTP Server] Server is running and listening at http://localhost:${PORT}`);
});

module.exports = server;
