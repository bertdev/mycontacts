const express = require('express');
const routes = require('./routes');
const cors = require('./app/middlewares/cors');

const PORT = 3001;

const app = express();

app.use(cors);
app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
