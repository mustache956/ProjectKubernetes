const express = require("express");
const app = express();
const port = 3001;
const routes = require("./api/route.js");


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});


app.use(routes);

 