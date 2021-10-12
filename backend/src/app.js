const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(morgan('combined'))

app.use(bodyParser.json())

require('./routes')(app)


sequelize.sync().then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
})

