const express = require('express');
const os = require('os')
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const config = require('./config/system-life');
const NodeHog = require('nodehog');

app.use(config.middlewares.healthMid);
app.use('/', config.routers);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 

app.get('/fahrenheit/:value/celsius', (req, res) => {

    let value = req.params.value;
    let celsius = (value - 32) * 5 / 9;
    res.json({ "celsius": celsius, "machine": os.hostname() });
});

app.get('/celsius/:value/fahrenheit', (req, res) => {

    let value = req.params.value;
    let fahrenheit = (value * 9 / 5) + 32;
    res.json({ "fahrenheit": fahrenheit, "machine": os.hostname() });
});

app.get('/temperatura/fahrenheittocelsius/:value', (req, res) => {

    let value = req.params.value;
    let celsius = (value - 32) * 5 / 9;
    res.json({ "celsius": celsius });
});

app.get('/temperatura/celsiustofahrenheit/:value', (req, res) => {

    let value = req.params.value;
    let fahrenheit = (value * 9 / 5) + 32;
    res.json({ "fahrenheit": fahrenheit });
});


app.listen(3000, () => {
    console.log("Server working on port 3000");
});
