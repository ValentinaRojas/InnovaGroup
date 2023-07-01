import { createPool } from 'mysql2/promise'
import ADODB from 'node-adodb';

export const connection = ADODB.open('Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:/node.accdb;');

export const pool = createPool({
   host: 'localhost',
   user: 'root',
   password: '123456789.',
   port:3306,
   database: 'innovagroup'
})