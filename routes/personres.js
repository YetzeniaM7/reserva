const connection = require ("../models/conexion");
var express = require('express');
var router = express.Router();
var validarToken = require('../authorization/validation')
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', validarToken, function(req, res, next) {
  var payload = jwt.decode(req.headers.authorization.replace('Bearer ', ''))
  if (payload.roles.includes("Personal")) {
    console.log('Paso a equipos...')

    // connection.query('SELECT * FROM  `equipos`', 
    // function (error, results, fields) {
    //   if (error) throw error;
    //   res.send(results)
    // });
  } else {
    res.send("No estas autorizado")
  }
});

module.exports = router;
