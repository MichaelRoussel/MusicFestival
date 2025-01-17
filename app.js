// Our dotenv
require('dotenv').config();

// Connecting to MongoDB cluster with Mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, {
  auth: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  },
  useNewUrlParser: true
}).catch(err => console.error(`ERROR: ${err}`));

// Our imported libraries
const express = require('express');

// Assigning Express to an app contstant
const app = express();

// Adding cookies and sessions
const cookieParser = require("cookie-parser");
const session = require("express-session");
app.use(cookieParser());
app.use(
  session({
    secret: process.env.secret || "boorakacha",
    cookie: {
      maxAge: 10800000
    },
    resave: true,
    saveUninitialized: true
  })
);

// This maintains our home path
const path = require('path');

// Body parser which will make reading request bodies MUCH easier
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Our authentication helper
const jwt = require("jsonwebtoken");
const isAuthenticated = req => {
  const token =
    (req.cookies && req.cookies.token) ||
    (req.body && req.body.token) ||
    (req.query && req.query.token) ||
    (req.headers && req.headers["x-access-token"]);

  if (req.session.userId) return true;

  if (!token) return false;

  jwt.verify(token, "bobthebuilder", (err, decoded) => {
    if (err) return false;
    return true;
  });
};
app.use((req, res, next) => {
  req.isAuthenticated = () => isAuthenticated(req);
  next();
});

// Our routes
const routes = require("./routes.js");
app.use("/api", routes);

// Handles any requests that don't match the ones above 
const root = path.join(__dirname, '/client/build');
app.use(express.static(root));
app.use((req, res, next) => {
  if (req.method === 'GET' && req.accepts('html') && !req.is('json') && !req.path.includes('.')) {
    res.sendFile('index.html', { root});
  } else next();
});

// Starting our server on port 4000
app.listen((process.env.PORT || 4000), () => console.log('Listening on 4000'));