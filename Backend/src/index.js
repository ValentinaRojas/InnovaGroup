import express from "express";
import usersRoutes from "./routes/users.routes.js"
import rolesRoutes from "./routes/roles.routes.js"
import DocumentTypeRoutes from "./routes/document_type.routes.js"
import loginRoutes from "./routes/login.routes.js"
import cors from 'cors';
 
const app = express()
app.use(express.json())
app.use(cors());
app.use("/api/",usersRoutes);
app.use("/api/",rolesRoutes);
app.use("/api/",DocumentTypeRoutes);
app.use("/api/",loginRoutes );


app.listen(3000);
console.log("server runing on port 3000");