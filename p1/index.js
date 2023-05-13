import express from "express";
import path from "path";
import * as db from "./db.js";

const app = express();

app.use(express.static("public"));
const __dirname = path.resolve();

const filePath = path.join(__dirname, "public");

app.use((request, respond, next) => {
  console.log(request.url, request.method);
  // respond.status(503).send("<h1>Site is under maintenance</h1>");
  next();
});

app.use(express.static(filePath));

const users = [
  {
    name: "Ali Shah",
    id: 19432,
  },
  {
    name: "Ali Khan",
    id: 58934,
  },
  {
    name: "Ali Zain",
    id: 29503,
  },
  {
    name: "Ali Akbar",
    id: 58934,
  },
  {
    name: "Ali Zia",
    id: 75934,
  },
];

app.get("/users", (request, respond) => {
  respond.json(users);
});

app.get("*", (resquest, respond) => {
  // const page404 = path.join(__dirname, "public", "..", "NotFound.html"); // if content is outside the folder.
  const page404 = path.join(__dirname, "public/404.html");
  console.log(page404);
  respond.status(404).sendFile(page404);
});

app.listen(2023, () => {
  console.log("The Boys!23023!!");
});
