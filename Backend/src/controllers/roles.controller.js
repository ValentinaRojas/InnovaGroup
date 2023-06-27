import { pool } from "../db.js";

export const getRoles = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM roles')
        res.json(rows)

    } catch (error) {
        res.status(500).json({ message: "algo salio mal" })
    }
};
