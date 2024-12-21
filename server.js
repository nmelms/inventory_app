const express = require("express");
const app = express();
const port = 3000;
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));

// Use routers
app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
