var express = require('express');
var router = express.Router();
var personalcontroller = require('../controllers/personalc');

//listar (Funciona)
router.get('/', function(req,res,next){
    personalcontroller.Listar()
    .then((respuesta)=>{
        res.render('personal', {respuesta: respuesta});
    })
})

//agregar (Funciona)
router.post('/', function(req, res, next){
    personalcontroller.Agregar(req.body)
    .then(()=>{
        personalcontroller.Listar()
        .then((respt)=>{
            res.send(respt);
        })
    })
});

//Buscar por id (Funciona)
router.get('/:id', function(req,res,next){
    personalcontroller.Buscar(req.params.id)
    .then((respt)=>{
        res.send(respt);
    })
})

//Actualizar
router.patch('/:id', function (req, res, next){
    personalcontroller.Actualizar(req.params.id, req.body)
  .then((respt)=>{
    res.send(respt);
  })
})

//Eliminar por su ID (Funciona)
router.delete('/:id', function(req,res,next){
    personalcontroller.Eliminar(req.params.id)
    .then((respt)=>{
        res.send(respt);
    })
})

module.exports = router;