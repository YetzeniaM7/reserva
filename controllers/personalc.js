const personalmodel = require('../models/personalm');

class personalcontroller {
    Listar(){
        return new Promise ( (resolve, reject) =>{
            personalmodel.Listar()
            .then((res)=>{
                resolve(res)
            })
        });
    }
    Buscar(id){
        return new Promise ((resolve, reject)=>{
            personalmodel.Buscar(id)
            .then((res)=>{
                resolve(res)
            });
        })
    }
    Agregar(ns){
        return new Promise ((resolve, reject)=>{
            personalmodel.Agregar(ns)
            .then((res)=>{
                resolve(res)
            });
        })
    }
    Actualizar(id, ns){
        return new Promise ((resolve, reject)=>{
            personalmodel.Actualizar(id, ns)
            .then((respt)=>{
                resolve(respt)
            })
        })    
    }
    Eliminar(id){
        return new Promise((resolve,reject)=>{
            personalmodel.Eliminar(id)
            .then((respt)=>{
                resolve(respt);
            })
        })
    }
}

module.exports = new personalcontroller;
