import { pool } from "../db.js";

export const getUsers = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM users')
        res.json(rows)
        
    }catch(error) {
res.status(500).json({message:"algo salio mal"})
      }


};