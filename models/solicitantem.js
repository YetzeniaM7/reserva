const connection = require('./conexion');

class solicitantemodel {
    Listar(){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM `solicitantes`', function(error, results, fields){
                resolve(results);            
            })
        })
    }
    Buscar(id){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM `solicitantes` WHERE `ID` = ? ', [id], function(error,results,fields){
                resolve(results)
            })
        })
    }
    Agregar(ns){
        return new Promise((resolve, reject)=>{
            let query = connection.query('INSERT INTO solicitantes SET ?', ns, function(error,results, fields){
                if(error)throw error;
            })
            var respt = "Agregado Correctamente"
            resolve(respt);
        })
    }
    //Actualizar-Editar
    Actualizar(id, ns){
        return new Promise ((resolve, reject)=>{
            var query = connection.query('UPDATE `solicitantes` SET `nombre_apellido`= ?,`fecha_nacimiento`= ?,`direccion`= ?,`username`= ?, `clave`= ?, `telefono` = ? WHERE id = ? ', [ns.nombre_apellido, ns.fecha_nacimiento, ns.direccion, ns.username, ns.clave, ns.telefono , id] , function (error, results, fields) {
                if (error) throw error;

                let respt = "Solicitante Actualizado Correctamente"
                resolve(respt);
              });
        })
    }
    Eliminar(id){
        return new Promise((resolve, reject)=>{
            connection.query('DELETE FROM solicitantes WHERE id = "'+id+'"', function(error,results,fields){
                if(error) throw error;
                let respt = "Solicitante Eliminado"
                resolve(respt);
            })
        })
    }
}

module.exports = new solicitantemodel;
