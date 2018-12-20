require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const auth = require('./routes/auth');
const service = require('./routes/service');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/auth', auth);
app.use('/api/service', service);

const port = process.env.PORT || 8080;

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, () => {
	console.log(`Server started on port ${port}...`);
});
