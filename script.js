import express from "express";
import users from "./routes/users.js";

const app = express();

var logger = function (req, res, next) {
  console.log("logger");
  next();
};

app.use(express.json());
app.use(logger);

// to access with views doc
app.set("view engine", "ejs");

// use the users.js file to handle endpoint withh users
app.use("/users", users);

app.get("/", (req, res) => {
  console.log("This is the root path!");
  res.json("message: Success");
});

app.get("/page", (req, res) => {
  res.render("page");
});

app.listen("3000", () => {
  console.log("port is funning in 3000");
});
