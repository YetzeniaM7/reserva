var espacioModel = require('../Models/espacioM');

class espaciocontroller {
    Listar(){
        return new Promise ( (resolve, reject) =>{
            espacioModel.Listar()
            .then((res)=>{
                resolve(res)
            })
        });
    }
    Buscar(id){
        return new Promise ((resolve, reject)=>{
            espacioModel.Buscar(id)
            .then((resp)=>{
                resolve(resp)
            });
        })
    }
    Agregar(ns){
        return new Promise ((resolve, reject)=>{
            espacioModel.Agregar(ns)
            .then((resp)=>{
                resolve(resp)
            });
        })
    }
    Actualizar(id, ns){
        return new Promise ((resolve, reject)=>{
            espacioModel.Actualizar(id, ns)
            .then((resp)=>{
                resolve(resp)
            })
        })    
    }
    Eliminar(id){
        return new Promise((resolve,reject)=>{
            espacioModel.Eliminar(id)
            .then((resp)=>{
                resolve(resp);
            })
        })
    }
}

module.exports = new espaciocontroller;