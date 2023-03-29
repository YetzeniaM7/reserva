const connection = require('./conexion');

class personalmodel {
    Listar(){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM `personal_tecnico`', function(error, results, fields){
                resolve(results);            
            })
        })
    }
    Buscar(id){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM `personal_tecnico` WHERE `ID` = ? ', [id], function(error,results,fields){
                resolve(results)
            })
        })
    }
    Agregar(ns){
        return new Promise((resolve, reject)=>{
            let query = connection.query('INSERT INTO personal_tecnico SET ?', ns, function(error,results, fields){
                if(error)throw error;
            })
            var respt = "Agregado Correctamente"
            resolve(respt);
        })
    }
    //Actualizar-Editar
    Actualizar(id, ns){
        return new Promise ((resolve, reject)=>{
            var query = connection.query('UPDATE `personal_tecnico` SET `nombre_apellido`= ?,`cargo`= ?,`username`= ?,`clave`= ?, `especialidad` = ? WHERE id = ? ', [ns.nombre_apellido, ns.cargo, ns.username, ns.clave, ns.especialidad, id] , function (error, results, fields) {
                if (error) throw error;

                let respt = "Espacio Actualizado Correctamente"
                resolve(respt);
              });
        })
    }
    Eliminar(id){
        return new Promise((resolve, reject)=>{
            connection.query('DELETE FROM personal_tecnico WHERE id = "'+id+'"', function(error,results,fields){
                if(error) throw error;
                let respt = "Espacio Eliminado"
                resolve(respt);
            })
        })
    }
}

module.exports = new personalmodel;