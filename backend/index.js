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

io.on("connection", (socket) => {
  console.log(`USER ${socket.id} CONNECTED`);

  socket.on("disconnect", () => {
    console.log(`USER ${socket.id} DISCONNECTED`);
  });
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
