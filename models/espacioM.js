const connection = require('./conexion');

class espacioModel {
    Listar(){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM `espacio`', function(error, results, fields){
                resolve(results);            
            })
        })
    }
    Buscar(id){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM `espacio` WHERE `ID` = ? ', [id], function(error,results,fields){
                resolve(results)
            })
        })
    }
    Agregar(ns){
        return new Promise((resolve, reject)=>{
            let query = connection.query('INSERT INTO espacio SET ?', ns, function(error,results, fields){
                if(error)throw error;
            })
            var respt = "Agregado Correctamente"
            resolve(respt);
        })
    }
    //Actualizar-Editar
    Actualizar(id, ns){
        return new Promise ((resolve, reject)=>{
            var query = connection.query('UPDATE `espacio` SET `nombre`= ?,`descripcion`= ?,`direccion`= ?,`estatus`= ? WHERE id = ? ', [ns.nombre, ns.descripcion, ns.direccion, ns.estatus, id] , function (error, results, fields) {
                if (error) throw error;

                let respt = "Espacio Actualizado Correctamente"
                resolve(respt);
              });
        })
    }
    Eliminar(id){
        return new Promise((resolve, reject)=>{
            connection.query('DELETE FROM espacio WHERE id = "'+id+'"', function(error,results,fields){
                if(error) throw error;
                let respt = "Espacio Eliminado"
                resolve(respt);
            })
        })
    }
}

module.exports = new espacioModel;