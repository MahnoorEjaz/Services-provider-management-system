const express = require('express');
const router =  require('./routes/UserRoutes');
const ConnectToDatabase = require('./utils/Connection');
const cors = require('cors');
const bodyParser = require('body-parser');

const App = express();

App.use(cors());
App.use(bodyParser.json({ limit: '10mb' }));
App.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));


const port = 5000;
App.use(express.json());
App.use('/api', router);
App.listen(port, () => {
    ConnectToDatabase();
    console.log(`The server is running on the port ${port}`);
});

