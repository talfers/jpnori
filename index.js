const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const expressLayouts = require('express-ejs-layouts');

// SET PUBLIC DIRECTORY
app.use(express.static(__dirname + '/public'));

// BODYPARSER SETUP
app.use(express.urlencoded({extended: false}));

// EJS SETUP
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {
  res.render("index.ejs")
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})
