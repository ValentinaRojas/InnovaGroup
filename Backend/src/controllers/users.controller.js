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
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [req.params.id])
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
    const password = await bcrypt.hash(req.body.password, 8);
    const [rowsa] = await pool.query('INSERT INTO users (document_type_id,Numero_de_documento,Nombre1,Nombre2,Apellido1,Apellido2,Fecha_nacimiento,Direccion,user_name,password,rol_id) VALUES (?,?,?,?,?,?,?,?,?,?,?);', [req.body.document_type_id, req.body.Numero_de_documento, req.body.Nombre1, req.body.Nombre2, req.body.Apellido1, req.body.Apellido2, req.body.Fecha_nacimiento, req.body.Direccion, req.body.user_name, password, req.body.rol_id])
    console.log(rowsa);
    res.status(200).json({ userid: rowsa.insertId });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message })
  }
};

export const UpdateUser = async (req, res) => {


  const secret = 'secreto-del-jwt';
  try {
    const authHeader = req.headers['authorization'];

    if (authHeader) {
      const token = authHeader.split(' ')[1];

      try {
        const decoded = await verify(token, secret);
        console.log(decoded.user_id);
        req.user = decoded.user_id;
        const { Apellido1, Apellido2, Nombre1, Nombre2, Numero_de_documento, Fecha_nacimiento, Direccion, password } = req.body
        const password2 = null;
        console.log(req.body);
        console.log(password);
        if (password) {
          password2 = await bcrypt.hash(password, 8);
        }
        
        const [result] = await pool.query('UPDATE employee SET Apellido1 = IFNULL(?,Apellido1 ), Apellido2 = IFNULL(?,Apellido2) ,Nombre1 = IFNULL(?,Nombre1) ,Nombre2 = IFNULL(?,Nombre2) ,Numero_de_documento = IFNULL(?,Numero_de_documento) ,Fecha_nacimiento = IFNULL(?,Fecha_nacimiento),Direccion = IFNULL(?,Direccion) ,password  = IFNULL(?,password) WHERE id = ?', [Apellido1, Apellido2, Nombre1, Nombre2, Numero_de_documento, Fecha_nacimiento, Direccion, password2, req.user])
        console.log(result);

        if (result.affectedRows == 0) {
          return res.status(404).json({ message: 'User not found' })
        }
        res.status(200).json({ result })

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