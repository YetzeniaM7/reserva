var express = require('express');
var router = express.Router();
var espaciocontroller = require('../controllers/espacio.c');

//listar (Funciona)
router.get('/', function(req,res,next){
    espaciocontroller.Listar()
    .then((resp)=>{
        res.render('espacio', {resp: resp});
    })
})

//agregar (Funciona)
router.post('/', function(req, res, next){
   espaciocontroller.Agregar(req.body)
    .then(()=>{
        espaciocontroller.Listar()
        .then((resp)=>{
            res.send(resp);
        })
    })
});

//Buscar por id (Funciona)
router.get('/:id', function(req,res,next){
    espaciocontroller.Buscar(req.params.id)
    .then((resp)=>{
        res.send(resp);
    })
})

//Actualizar
router.patch('/:id', function (req, res, next){
  espaciocontroller.Actualizar(req.params.id, req.body)
  .then((resp)=>{
    res.send(resp);
  })
})

//Eliminar por su ID (Funciona)
router.delete('/:id', function(req,res,next){
    espaciocontroller.Eliminar(req.params.id)
    .then((respt)=>{
        res.send(respt);
    })
})

module.exports = router;