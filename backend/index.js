const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET,POST"],
  },
});

io.on("connection", () => {
  console.log(socket.id + "connected");

  socket.on("disconnected", () => {
    console.log(socket.id + "disconnected");
  });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
