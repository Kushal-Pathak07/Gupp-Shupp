import express from "express";
import dotenv from "dotenv";
import path from "path";
import dbConnect from "./db/dbConnect.js";
import cookieParser from "cookie-parser";

import { app, server } from "./socket/socket.js";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

const __dirname = path.resolve();

dotenv.config();
app.use(express.json());
app.use(cookieParser());

//routing rhe api
app.use("/api/auth", authRoutes); //mounting the route on /api
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/dist/index.html"));
})


const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    dbConnect();
    console.log(`Server running on port ${PORT}`);
});