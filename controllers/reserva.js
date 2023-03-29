var reservemodel = require('../models/reserva')

class reserveController {
  
    Listar(){
        return new Promise ((resolve, reject) => {
            reservemodel.Listar()
            .then((res)=>{
                resolve(res)
            });
        })
    }

    Buscar(i){
        return new Promise ((resolve, reject) => {
            reservemodel.Buscar(i)
            .then((resp)=>{
                resolve(resp)
            });
        })
    } 

    Crear(r){
        return new Promise ((resolve, reject) => {
            reservemodel.Crear(r)
            .then((resp)=>{
                resolve(resp)
            });
        })
    }
    
    Actualizar(i,r){
        return new Promise ((resolve, reject) => {
            reservemodel.Actualizar(i,r)
            .then((resp)=>{
                resolve(resp)
            });
        })
    }
    Eliminar(i){
        return new Promise ((resolve, reject) => {
            reservemodel.Eliminar(i)
            .then((resp)=>{
                resolve(resp)
            });
        })
    } 
}


module.exports = new reserveController();
