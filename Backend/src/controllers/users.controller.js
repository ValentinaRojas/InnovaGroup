import { pool } from "../db.js";

export const getUsers = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users')
        res.json(rows)

    } catch (error) {
        res.status(500).json({ message: "algo salio mal" })
    }
};

export const createUsers = async (req, res) => {
    
    try {
        console.log(req.body);
        const [rowsa] = await pool.query('INSERT INTO users (document_type_id,Numero_de_documento,Nombre1,Nombre2,Apellido1,Apellido2,Fecha_nacimiento,Direccion) VALUES (?,?,?,?,?,?,?,?);',[req.body.document_type_id,req.body.Numero_de_documento,req.body.Nombre1,req.body.Nombre2,req.body.Apellido1,req.body.Apellido2,req.body.Fecha_nacimiento,req.body.Direccion])
        const [rowsb] = await pool.query('INSERT INTO users_login (user_name,password,rol_id,user_id) VALUES (?,?,?,?);',[req.body.user_name,req.body.password,req.body.rol_id,""])
        res.status(200).json({rowsa,rowsb});

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "algo salio mal" })
    }
};