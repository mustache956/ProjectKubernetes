const kart = require("./controller.js");
module.exports = (app) => {
    app.get("/kart/:username", kart.getKart);
    app.post("/kart/:username", kart.addProductToKart);
    app.delete("/kart/:username", kart.removeProductFromKart);
}
