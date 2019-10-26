const path = require('path');
const express = require('express')
const app = express()

const port = process.env.PORT || 3001;
const base = process.env.BASE_URL || 'gp-admin';

app.use('/' + base, express.static(path.join(__dirname, 'dist')))

app.listen(port, () => console.log('Admin front-server is up on port ' + port + ' /' + base))
