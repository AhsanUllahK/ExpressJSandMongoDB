import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"));
const __dirname = path.resolve();

const publicPath = path.join(__dirname, "public");
console.log(publicPath);

app.use((request, respond, next) => {
  console.log(request.url, request.method);
  //   respond.status(503).send("<h1>The site is under maintenance</h1>");

  next();
});
app.use(express.static(publicPath)); // this line of code allow us to access to static content(JS,CSS or html) in project from specified folder
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/maintenance", (request, respond, next) => {
//   next();
// });
const users = [
  {
    name: "Ahsan Ullah Khan",
    id: 190369,
  },
  {
    name: "Rabees Waheed",
    id: 190316,
  },
  {
    name: "Aqeel Mirani",
    id: 191452,
  },
];

app.get("/users", (request, respond) => {
  respond.status(201).send(users);
});

app.get("/help", (request, respond) => {
  const helpFilePath = path.join(__dirname, "public/help.html");
  respond.sendFile(helpFilePath);
});

app.get("*", (request, respond) => {
  const filePath = path.join(__dirname, "public/404.html");
  respond.sendFile(filePath);
});

app.listen(3030, () => {
  console.log("Node server is started!");
});
