const express = require("express");
const app = express();
const http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
// app.use(express.static(__dirname + "/public"));
//socket

io.on("connection", (socket) => {
  console.log("connnected");

  socket.on("message", (msg) => {
    socket.broadcast.emit("message", msg);
  });
});

http.listen(3000, () => {
  console.log("server connected");
});
