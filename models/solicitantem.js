const connection = require('./conexion');

class solicitantemodel {
    Listar(){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM `solicitante`', function(error, results, fields){
                resolve(results);            
            })
        })
    }
    Buscar(id){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM `solicitante` WHERE `ID` = ? ', [id], function(error,results,fields){
                resolve(results)
            })
        })
    }
    Agregar(ns){
        return new Promise((resolve, reject)=>{
            let query = connection.query('INSERT INTO solicitante SET ?', ns, function(error,results, fields){
                if(error)throw error;
            })
            var respt = "Agregado Correctamente"
            resolve(respt);
        })
    }
    //Actualizar-Editar
    Actualizar(id, ns){
        return new Promise ((resolve, reject)=>{
            var query = connection.query('UPDATE `solicitante` SET `nombre_apellido`= ?,`fecha_nacimiento`= ?,`direccion`= ?,`username`= ?, `clave`= ?, `telefono` = ? WHERE id = ? ', [ns.nombre_apellido, ns.fecha_nacimiento, ns.direccion, ns.username, ns.clave, ns.telefono , id] , function (error, results, fields) {
                if (error) throw error;

                let respt = "Espacio Actualizado Correctamente"
                resolve(respt);
              });
        })
    }
    Eliminar(id){
        return new Promise((resolve, reject)=>{
            connection.query('DELETE FROM solicitante WHERE id = "'+id+'"', function(error,results,fields){
                if(error) throw error;
                let respt = "Espacio Eliminado"
                resolve(respt);
            })
        })
    }
}

module.exports = new solicitantemodel;
