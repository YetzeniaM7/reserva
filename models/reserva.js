const connection = require ("./conexion");

class reservemodel {
    Listar(){
        return new Promise ((resolve,reject)=>{
            connection.query('SELECT * FROM reserva', function (error, results, fields){
                resolve(results)
            });
        });
    }


    Buscar(i){
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM reserva WHERE ID = ?', [i], function (error, results, fields) {
                resolve(results)
            }); 
        });
    }

    Crear(r){
        return new Promise ((resolve,reject)=>{
            var query = connection.query('INSERT INTO reserva SET ?', r, function (error, results, fields) {
                if (error) throw error;
                // Neat!
                let resp="Agregado"
                resolve(resp)
            });
        }); 
    }
 



    Actualizar(i,r){
        return new Promise ((resolve,reject)=>{
           
            
            var query = connection.query('UPDATE reserva SET  SOLICITANTE = ?, FECHA_INICIO = ?, FECHA_FINAL = ?, MOTIVO = ?, PERSONAL = ?, EQUIPO = ?, ESPACIO = ?  WHERE  ID = ?', [r.SOLICITANTE, r.FECHA_INICIO, r.FECHA_FINAL, r.MOTIVO, r.PERSONAL, r.EQUIPO, r.ESPACIO, i], function (error, results, fields) {
                if (error) throw error;
                let resp="Actualizado"
                resolve(resp)
            });
        }); 
    }

    Eliminar(i){
        return new Promise((resolve,reject)=>{
            connection.query('DELETE FROM reserva WHERE id = "'+i+'"', function (error, results, fields) {
                if (error) throw error;
                let resp="Eliminado"
                resolve(resp)
            })
        })
    }

}

module.exports = new reservemodel();