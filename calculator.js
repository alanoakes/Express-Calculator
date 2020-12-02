const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
});

app.post('/Express-Calculator/' ,(req, res) => {
	// bodyParser lets you grab post data

	// make calculator
	var num1 = Number(req.body.num1);
	var num2 = Number(req.body.num2);
	var result = num1 + num2;

	console.log('num1: ' + req.body.num1 + '; num2: ' + req.body.num2 + '; result: ' + result); 
	res.send('The result of your calculation is: ' + result);
});

app.listen(port, () => {
	console.log(`calculator app listening at http://localhost:${port}`)
});
