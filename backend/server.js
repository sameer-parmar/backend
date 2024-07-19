const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/globe-data', (req, res) => {
    const dataPath = path.join(__dirname, 'data.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the data file:', err);
            return res.status(500).send('Internal Server Error');
        }
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
