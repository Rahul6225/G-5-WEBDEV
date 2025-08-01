//Express GENERATOR---> it generate the complete base template for the backend with view engine

// npx install express-generator

const express = require("express");
const app = express();
const PORT = 3000
const hbs = require("hbs");
const path = require("path");
// const hbs = require("hbs");

// Register partials
hbs.registerPartials(path.join(__dirname, "views", "partials"));
// express.static('./public/');
// app.use(express.static("./public"));

// app.use("/static", express.static("public"));

// app.response.sendStatus = function (statusCode, type, message) {
//   // code is intentionally kept simple for demonstration purpose
//   return this.contentType(type).status(statusCode).send(message);
// };

// app.get("/", (req, res) => {
//   res.end("Hello this is server ");
// });
// app.get("/app", (req, res) => {
//   res.end("neww page");
// });

// app.use("/", (err, req, res, next) => {
//   if (err) {
//     res.status(500).send("something occured");
//   }
// });

app.set("view engine", "html");
app.engine("html", require("hbs").__express);

app.get("/", (req, res) => {
  res.render("home.hbs", {
    firstName: "Rahul",
    lastName: "Singh",
  });
});
app.get("/products", (req, res) => {
  res.render("products.hbs", {
    id: "p101",
    name: "Wireless Mouse",
    price: 799.99,
    currency: "INR",
  });
});
app.listen(PORT, () => {
  console.log("Server is Running ");
});

//If ,you need any application level middleware
