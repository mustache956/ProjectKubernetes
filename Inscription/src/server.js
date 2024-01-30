const express = require("express");
const app = express();
const port = 3000;
const routes = require("./api/route.js");
const db = require("./db/mongo.js");
const  bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

db.initClientDbConnection();

const corsOptions = {
    origin: 'http://localhost:8090',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});


routes(app);

 