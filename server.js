const express = require('express');
const path = require('path');
const htmlRoutes = require ('./routes/htmlRoutes')

//add middleware and check the path to it
//const { clog } = require('./middleware/clog');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware, "cLog"
//app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/api', api);

app.use(express.static('public'));

app.use ('/api', apiRoutes);
app.use ('/', htmlRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
