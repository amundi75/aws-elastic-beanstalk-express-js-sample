const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('I created my first delivery pipeline. Isn't that awesome?!'));
app.listen(port);
console.log(`App running on http://localhost:${port}`);
