const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 5050;

const clientPath = path.join(__dirname, 'client');

app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static(clientPath));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(clientPath, 'index.html'));
// });

app.get('*', (req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server start on localhost:${port}/ .`);
});