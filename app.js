const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
	res.send("hello from nodejs");
});

app.listen(port, () => console.log(`example app listening on port ${port}`)); 
