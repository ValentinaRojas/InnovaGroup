import express from "express";
import usersRoutes from "./routes/users.routes.js"
import rolesRoutes from "./routes/roles.routes.js"
import DocumentTypeRoutes from "./routes/document_type.controller.js"
 
const app = express()
app.use(express.json())

app.use("/api/",usersRoutes);
app.use("/api/",rolesRoutes);
app.use("/api/",DocumentTypeRoutes);


app.listen(3000);
console.log("server runing on port 3000");