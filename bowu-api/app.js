const express = require('express'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  cors = require('cors'),
  logger = require('morgan');

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept'
};

const indexRouter = require('./routes/index'),
  usersRouter = require('./routes/users'),
  apiCallsRouter = require('./routes/apiCalls');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/apicall', apiCallsRouter);

module.exports = app;
