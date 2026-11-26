const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/api/message', (req, res) => {
    res.send('Hello! Cloud Deployment Successful');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server running');
});