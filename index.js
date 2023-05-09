import express from "express";

const app = express();

app.get("/users", (request, respond) => {
  console.log(request.url, request.method);
  //   respond.send("<H1>Hello There!</h1>");
  respond.json({
    name: "Ahsan Ullah Khan",
    rollno: 190369,
    country: {
      city: "Karachi",
    },
  });
});

app.listen(3030, () => {
  console.log("Node server is started!");
});
