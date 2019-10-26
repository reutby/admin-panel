const express = require('express')
const app = express()

const port = process.env.PORT || 3001;

app.use('/' + (process.env.BASE_URL || 'gp-admin'), express.static('dist'))

app.listen(port, () => console.log('admin front-server is up on port ' + port))
