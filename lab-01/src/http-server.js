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
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Hello');
});

// Start listening on port 3000
server.listen(PORT, () => {
  console.log(`[HTTP Server] Server is running and listening at http://localhost:${PORT}`);
});

