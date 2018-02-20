const express = require('express');
const mo = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const Router = require('./controllers/burgers_controller');

const PORT = process.env.PORT || 3000;
const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());

app.use(Router);








app.listen(PORT, () => {
  console.log(`You are listening on port: ${PORT}`)
});
