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
            .then((res)=>{
                resolve(res)
            });
        })
    }
    Agregar(ns){
        return new Promise ((resolve, reject)=>{
            espacioModel.Agregar(ns)
            .then((res)=>{
                resolve(res)
            });
        })
    }
    Actualizar(id, ns){
        return new Promise ((resolve, reject)=>{
            espacioModel.Actualizar(id, ns)
            .then((respt)=>{
                resolve(respt)
            })
        })    
    }
    Eliminar(id){
        return new Promise((resolve,reject)=>{
            espacioModel.Eliminar(id)
            .then((respt)=>{
                resolve(respt);
            })
        })
    }
}

module.exports = new espaciocontroller;