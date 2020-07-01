const express = require('express');
const bodyParser = require('body-parser');
const { unmerceydb } = require('./db/unmerceydb');
const { List, Task } = require('./api/list/models');
const listsRoutes = require('./api/list/routes/lists.routes');

const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.json());

/**
 * @description ENABLE CORS
 */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
listsRoutes(app);
app.listen(port, () => { console.log(`\tServer started on port: ${port}`); });
