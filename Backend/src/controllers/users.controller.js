import { pool } from "../db.js";
import bcrypt from 'bcryptjs';
import { verify } from 'jsonwebtoken';

export const getUsers = async (req, res) => {

    const secret = 'secreto-del-jwt';
    try {
        const authHeader = req.headers['authorization'];
      
        if (authHeader) {
          const token = authHeader.split(' ')[1];
      
          try {
            const decoded = await verify(token, secret);
            console.log(decoded);
            req.user = decoded;
            const [rows] = await pool.query('SELECT * FROM users',)
            res.json(rows)
    
          } catch (err) {
            res.status(403).json({ message: 'Token inválido' });
          }
        } else {
          res.status(401).json({ message: 'Token requerido' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Algo salió mal' });
      }
};



export const getUserbyid = async (req, res) => {


    const secret = 'secreto-del-jwt';
    try {
        const authHeader = req.headers['authorization'];
      
        if (authHeader) {
          const token = authHeader.split(' ')[1];
      
          try {
            const decoded = await verify(token, secret);
            console.log(decoded);
            req.user = decoded;
            const [rows] = await pool.query('SELECT * FROM users WHERE id = ?',[req.params.id])
            res.json(rows)
    
          } catch (err) {
            res.status(403).json({ message: 'Token inválido' });
          }
        } else {
          res.status(401).json({ message: 'Token requerido' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Algo salió mal' });
      }
};

export const createUsers = async (req, res) => {

    try {
        console.log(req.body);
        const password = await bcrypt.hash(req.body.password,8);
        const [rowsa] = await pool.query('INSERT INTO users (document_type_id,Numero_de_documento,Nombre1,Nombre2,Apellido1,Apellido2,Fecha_nacimiento,Direccion,user_name,password,rol_id) VALUES (?,?,?,?,?,?,?,?,?,?,?);',[req.body.document_type_id,req.body.Numero_de_documento,req.body.Nombre1,req.body.Nombre2,req.body.Apellido1,req.body.Apellido2,req.body.Fecha_nacimiento,req.body.Direccion,req.body.user_name,password,req.body.rol_id])
        console.log(rowsa);
        res.status(200).json({userid:rowsa.insertId});

    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
};