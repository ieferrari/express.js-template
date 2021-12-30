const app = require('./app')
const config = require('./config.js'); // load config file

const PORT = config.PORT;
const HOST = config.HOST;

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);