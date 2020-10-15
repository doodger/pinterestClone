const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json() );
app.use(bodyParser.json());
app.use('/api', routes);

app.listen(port, () =>  console.log('Example app listening on port ${port}!'))
