const express = require('express');

const routes = require('./routes');

const app = express();
const morgan = require('morgan')

app.set('view engine', 'pug');
app.use(morgan('dev'))
app.use(routes);

//catch unhandled requests and forward to error handlers
app.use((req, res, next) => {
  const err = new Error('The requested page couldn\'t be found')
  err.status = 404;
  next(err)
})


//handler to log errors
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
      //to do -> log the error to database
  } else {
    console.error(err)
  }
  next(err)
})

// Error handler for 404 errors.
app.use((err,req,res,next) => {
  if (err.status === 404) {
    res.status(404);
    res.render('page-not-found', {
      title: 'Page not found'
    });
  } else {
    next(err)
  }

});



//generic error handler.
app.use((err, req, res, next) => {
  res.status(err.status || 500) 
  const isProduction = process.env.NODE_ENV === 'production'
  res.render('error', {
    title: 'Server Error',
    message: isProduction ? null : err.message,
    stack: isProduction ? null : err.stack
  })
})

module.exports = app