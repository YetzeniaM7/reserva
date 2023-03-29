var express = require('express');
var router = express.Router();
var reserveRouter = require("../controllers/reserva");  

router.get('/', function(req, res, next) {
    reserveRouter.Listar()
    .then((respuesta)=>{   
        res.render('reserva', {respuesta: respuesta});
    
    })  
});

router.get("/:id", function(req, res, next) {
    reserveRouter.Buscar(req.params.id)
    .then((resp)=>{
        res.render('reserva', {resp: resp});
        res.send(console.log(resp))
    
    })
});


router.post('/', function(req, res, next) {
    reserveRouter.Crear(req.body)
    .then((resp)=>{
        res.send(console.log(resp))
    })
});
+

router.patch("/:id", function(req, res, next) {
    reserveRouter.Actualizar(req.params.id , req.body)
    .then((resp)=>{
        res.send(console.log(resp))
    })
});


router.delete("/:id", function(req, res, next) {
    reserveRouter.Eliminar(req.params.id)
    .then((resp)=>{
        res.send(console.log(resp))
    })
});

module.exports = router;
  