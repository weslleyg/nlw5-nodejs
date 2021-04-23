import express from "express";

import "./database";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3333, () => console.log("Server on port 3333"));

