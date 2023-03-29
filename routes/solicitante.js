var express = require('express');
var router = express.Router();
var solicitantecontroller = require('../controllers/solicitantec');

//listar (Funciona)
router.get('/', function(req,res,next){
    solicitantecontroller.Listar()
    .then((respuesta)=>{
        res.render('solicitante', {respuesta: respuesta});
    })
})

//agregar (Funciona)
router.post('/', function(req, res, next){
    solicitantecontroller.Agregar(req.body)
    .then(()=>{
        solicitantecontroller.Listar()
        .then((respt)=>{
            res.send(respt);
        })
    })
});

//Buscar por id (Funciona)
router.get('/:id', function(req,res,next){
    solicitantecontroller.Buscar(req.params.id)
    .then((respt)=>{
        res.send(respt);
    })
})

//Actualizar
router.patch('/:id', function (req, res, next){
    solicitantecontroller.Actualizar(req.params.id, req.body)
  .then((respt)=>{
    res.send(respt);
  })
})

//Eliminar por su ID (Funciona)
router.delete('/:id', function(req,res,next){
    solicitantecontroller.Eliminar(req.params.id)
    .then((respt)=>{
        res.send(respt);
    })
})

module.exports = router;