const connection = require ("./conexion");

class tModelo {
    Listar(){
        return new Promise ((resolve,reject)=>{
            connection.query('SELECT * FROM trabajo', function (error, results, fields){
                resolve(results)
            });
        });
    }


    Buscar(i){
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM trabajo WHERE ID = ?', [i], function (error, results, fields) {
                resolve(results)
            }); 
        });
    }

    Crear(r){
        return new Promise ((resolve,reject)=>{
            var query = connection.query('INSERT INTO trabajo SET ?', r, function (error, results, fields) {
                if (error) throw error;
                // Neat!
                let resp="Agregado"
                resolve(resp)
            });
        }); 
    }
 



    Actualizar(i,r){
        return new Promise ((resolve,reject)=>{
           
            
            var query = connection.query('UPDATE trabajo SET  FECHA_INICIO = ?, FECHA_FINAL = ?, PERSONAL = ?, RESERVA = ?, EQUIPO = ?, ESTADO = ? WHERE  ID = ?', [r.fecha_inicio, r.fecha_final,r.PERSONAL , r.RESERVA,r.EQUIPO, i], function (error, results, fields) {
                if (error) throw error;
                let resp="Actualizado"
                resolve(resp)
            });
        }); 
    }

    Eliminar(i){
        return new Promise((resolve,reject)=>{
            connection.query('DELETE FROM trabajo WHERE id = "'+i+'"', function (error, results, fields) {
                if (error) throw error;
                let resp="Eliminado"
                resolve(resp)
            })
        })
    }

}

module.exports = new tModelo();