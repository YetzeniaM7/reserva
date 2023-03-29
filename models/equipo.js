const connection = require ("./conexion");
//CLase
class tModelo {
    //Buscar registros
    Listar(){
        return new Promise ((resolve,reject)=>{
            connection.query('SELECT * FROM EQUIPOS', function (error, results, fields){
                resolve(results)
            });
        });
    }

    //Buscar Registros por id
    Buscar(i){
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM EQUIPOS WHERE ID = ?', [i], function (error, results, fields) {
                resolve(results)
            }); 
        });
    }
    //Insertar registros
    Crear(r){
        return new Promise ((resolve,reject)=>{
            var query = connection.query('INSERT INTO EQUIPOS SET ?', r, function (error, results, fields) {
                if (error) throw error;
                // Neat!
                let resp="Agregado"
                resolve(resp)
            });
        }); 
    }
 
    //Actualizar registros
    Actualizar(i,r){
        return new Promise ((resolve,reject)=>{           
            var query = connection.query('UPDATE EQUIPOS SET  NOMBRE = ?, SERIAL = ?, DESCRIPCION = ?, FECHA = ?, ESTADO = ? WHERE  ID = ?', [r.NOMBRE,r.SERIAL , r.DESCRIPCION,r.FECHA,r.ESTADO, i], function (error, results, fields) {
                if (error) throw error;
                let resp="Actualizado"
                resolve(resp)
            });
        }); 
    }

    //Eliminar registros
    Eliminar(i){
        return new Promise((resolve,reject)=>{
            connection.query('DELETE FROM EQUIPOS WHERE id = "'+i+'"', function (error, results, fields) {
                if (error) throw error;
                let resp="Eliminado"
                resolve(resp)
            })
        })
    }

}

module.exports = new tModelo();
