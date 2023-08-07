import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

let items = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { items });
});

app.post("/", (req, res) => {
  const { newItem } = req.body;

  if (newItem) {
    items.push(newItem);
  }

  res.render("index", { items });
});

let works = [];

app.get("/work", (req, res) => {
  res.render("work.ejs", { works });
});

app.post("/work", (req, res) => {
  const { newItem } = req.body;

  if (newItem) {
    works.push(newItem);
  }
  res.render("work.ejs", { works });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
