const user = require("./controller.js");
module.exports = (app) => {
  app.post("/register", user.registerUser);
  app.post("/login", user.loginUser);
}