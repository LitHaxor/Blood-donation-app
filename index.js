import express from "express";
import { data } from "./data.js";
const app = express();

// http://localhost:5000/

app.get("/", (request, response) => {
  return response.status(200).send({
    name: "First server",
  });
});

// http://localhost:5000/donars
app.get("/donors", (req, res) => {
  return res.status(200).send(data);
});
// Serve
app.listen(5000, console.log(`server running at http://localhost:5000`));

// REST API METHOD
// GET - get data
// GET --  one data
// POST - create one data
// PUT - update one data
// delete - delete one data
