const solicitantemodel = require('../models/solicitantem');

class solicitantecontroller {
    Listar(){
        return new Promise ( (resolve, reject) =>{
            solicitantemodel.Listar()
            .then((res)=>{
                resolve(res)
            })
        });
    }
    Buscar(id){
        return new Promise ((resolve, reject)=>{
            solicitantemodel.Buscar(id)
            .then((res)=>{
                resolve(res)
            });
        })
    }
    Agregar(ns){
        return new Promise ((resolve, reject)=>{
            solicitantemodel.Agregar(ns)
            .then((res)=>{
                resolve(res)
            });
        })
    }
    Actualizar(id, ns){
        return new Promise ((resolve, reject)=>{
            solicitantemodel.Actualizar(id, ns)
            .then((respt)=>{
                resolve(respt)
            })
        })    
    }
    Eliminar(id){
        return new Promise((resolve,reject)=>{
            solicitantemodel.Eliminar(id)
            .then((respt)=>{
                resolve(respt);
            })
        })
    }
}

module.exports = new solicitantecontroller;
