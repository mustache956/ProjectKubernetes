const user = require("./controller.js");


module.exports = function(app) {
  app.post("/register", user.registerUser);
  app.post("/login", user.loginUser);
}