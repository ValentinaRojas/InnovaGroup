import { pool } from "../db.js";

export const getDocumentType = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM document_type')
        res.json(rows)

    } catch (error) {
        res.status(500).json({ message: "algo salio mal" })
    }
};
