import { pool } from "../db.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const secret = 'secreto-del-jwt';

export const login = async (req, res) => {
    try {
        console.log(req.body.user_name);
        if (req.body.user_name && req.body.password) {
            //const password = await bcrypt.hash(req.body.password, 8);
            const [rows] = await pool.query('SELECT * FROM users WHERE user_name = ?', [req.body.user_name]);
            //console.log(rows);
            if (rows.length == 0 || !(await bcrypt.compare(req.body.password, rows[0].password))) {
                res.status(200).json({ message: "credenciales incorrectas" })
            } else {
                const user_id = rows[0].id;
                const token = jwt.sign({ user_id }, secret, { expiresIn: '1h' });
                res.status(200).json({token, userid: rows[0].id})
            }
        } else {
            res.status(200).json({ message: "falta informacion" })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
};