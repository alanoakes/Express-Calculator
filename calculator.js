const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
});

app.post('/', (req, res) => {
	res.send('Thanks for posting that!')
});

app.listen(port, () => {
	console.log(`calculator app listening at http://localhost:${port}`)
});
