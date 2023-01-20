const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');
const session = require('express-session');
const flash = require('connect-flash');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const shopRoutes = require('./routes/shop');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: 'crudlesson',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}));
app.use(flash());

sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    // console.log(result);
    console.log('connected to database')
  })
  .catch(err => {
    console.error(err);
  });

  app.use('/shop',shopRoutes);
  app.get('/', (req, res) => {
    res.render('shop/index', {
      pageTitle: 'Shop',
      path: '/',
      message:'',
      editing: false
    })
  })


  // set port, listen for requests
  const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
