const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "/static")));

app
  .use(expressLayouts)
  .set("view engine", "ejs")
  .set("views", path.join(__dirname, "/content"));

app.get("/", (req, res) => {
  const datas = require("./data/data.json");
  res.render("index", {
    layout: path.join(__dirname, "/layouts/main"),
    datas
  });
});

app.listen(3003, () => {
  console.log("Server running on port 3003");
});
