import express from "express";

const app = express();

app.get("/index2", (request, respond) => {
  respond.send("<h1>Index2.js filed is read!</h1>");
});
app.listen(3050, () => {
  console.log("Hello index2.js");
});
