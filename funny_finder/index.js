const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors());
const path = require('path');
const fs =require('fs')
require('dotenv').config();
const https = require('https')

const options = {
  cert: fs.readFileSync(process.env.CERT_PATH),
  key: fs.readFileSync(process.env.KEY_PATH),
}


require('dotenv').config();

// Middleware
app.use(express.json())
const eventRoutes = require('./routes/events')
const ticketmasterRoutes = require('./routes/ticketmaster')

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/events', eventRoutes)
app.use('api/ticketmaster', ticketmasterRoutes)

//connect to DB
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const uri = `mongodb+srv://${user}:${password}@cluster0.8lktkfd.mongodb.net/?retryWrites=true&w=majority/FunnyFinderDb`;

mongoose.connect(uri, {
  dbName: 'FunnyFinderDb',
})
  .then(() => {
      //listen for requests
      app.listen(27017, () => {
        console.log('connected to db and listening on port 27017')
      })
  })
  .catch((error) =>{
    console.log(error)
  })

// Let the React app handle any unknown routes

app.use(express.static('build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

module.exports = https.createServer(options, app);

// If not in production, use the port 5000
const PORT = process.env.PORT || 5000;
const server = https.createServer(options, app);
server.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});

