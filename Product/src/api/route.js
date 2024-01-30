const product = require('./controller.js');

module.exports = (app) => {
    app.get("/products", product.getAllProducts);
    app.get("/products/:id", product.getProductById);
    app.post("/products", product.addProduct);
}

