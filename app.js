var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//Archivos utilizados
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tRouter = require('./routes/trabajo');
var ERouter = require('./routes/equipo');
var espacio = require('./routes/espacio');
var reservaRouter = require('./routes/reserva');
var personalRouter = require('./routes/personal');
var solicitanteRouter = require('./routes/solicitante');
var loginRouter = require('./routes/login');
var loginpersonalRouter = require('./routes/loginpersonal');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Archivos utilizados
app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/loginpersonal', loginpersonalRouter);
app.use('/trabajo', tRouter);
app.use('/equipo', ERouter);
app.use('/espacio', espacio);
app.use('/reserva', reservaRouter);
app.use('/personal', personalRouter);
app.use('/solicitante', solicitanteRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
