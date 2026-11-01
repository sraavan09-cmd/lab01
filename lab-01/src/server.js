/**
 * Lab 1: Node.js and Express Server
 * Express Server Implementation
 * 
 * Student: Y. SRAAVAN
 * Registration Number: 252U1R1264
 * Section: CSE-2E & 211(S-6)
 */

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// 1. GET / - Welcome message
app.get('/', (req, res) => {
  res.status(200).send('Welcome to Lab 1 - Node.js and Express Server!');
});

// 2. GET /about - Student and lab information in JSON format
app.get('/about', (req, res) => {
  res.status(200).json({
    name: 'Y. SRAAVAN',
    registrationNumber: '252U1R1264',
    section: 'CSE-2E & 211(S-6)',
    course: 'Backend Development Fundamentals',
    lab: 'Lab 1: Node.js and Express Server'
  });
});

// 3. GET /date - Today's date (NxtWave / course standard format)
app.get('/date', (req, res) => {
  const date = new Date();
  res.status(200).send(`Today's date is ${date}`);
});

// 4. GET /time - Current date, time, and timestamp using new Date()
app.get('/time', (req, res) => {
  const now = new Date();
  res.status(200).json({
    date: now.toISOString().split('T')[0],
    time: now.toTimeString().split(' ')[0],
    timestamp: now.getTime(),
    iso: now.toISOString(),
    utc: now.toUTCString(),
    local: now.toString()
  });
});

// 5. Undefined path handler - 404 Route Not Found
app.use((req, res) => {
  res.status(404).json({
    error: '404 - Route Not Found',
    message: `The requested path '${req.originalUrl}' does not exist on this server.`,
    statusCode: 404
  });
});

// 6. Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('[Server Error]:', err.stack);
  res.status(500).json({
    error: '500 - Internal Server Error'
  });
});

// Start Express server
const server = app.listen(PORT, () => {
  console.log(`[Express Server] Server running successfully at http://localhost:${PORT}`);
});

module.exports = { app, server };
