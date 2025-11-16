const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    message: 'API is running successfully',
    timestamp: new Date().toISOString(),
    server: '136.111.190.185',
    port: PORT
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API server listening on port ${PORT}`);
  console.log(`Access at: http://136.111.190.185:${PORT}/api/health`);
});
