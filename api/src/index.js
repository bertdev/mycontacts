const express = require('express');
const routes = require('./routes');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
