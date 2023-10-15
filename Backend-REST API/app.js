const express = require('express');
const routes = require('./routes');
const errorHandler = require('./middlewares/errors.middleware');
const config = require('./config/default.json');
const cors = require('cors');

const PORT = config.PORT;

const app = express();

app.use(cors());
app.use('/', routes);
app.use(errorHandler.handleError);

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})









