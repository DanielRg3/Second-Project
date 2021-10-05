// npm init -y (to install the package.json)

const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequilizeStore = require('connect-session-sequilize')(session.Store);

const routes = require('./controllers'); //route loggics
const sequilize = require('./config/connection'); //Communication between app and db
const helpers = require('./utils/helpers'); //Pending...

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {}, //Store information about the session
    resave: false, //Don't delete previous info
    saveUnitialized: true, //Save empty cooky
    store: new SequilizeStore({ //whre to store the information
        db: sequilize,
    }),
};

app.use(session(sess));

const hbs = exphbs.create({helpers}); //Pending...

app.engine('handlebars', hbs.engine); //Pending...
app.set('view engine', 'handlebars'); //Pending...

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequilize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('We are listening'));
});
