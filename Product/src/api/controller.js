const product = require('../model/product');

async function getAllProducts(req, res) {
    try {
        const products = await product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des produits' });
    }
}

async function getProductById(req, res) {
    try {
        const { id } = req.params;
        const productById = await product.findOne({ id });
        if (!productById) {
            return res.status(404).json({ message: 'Produit non trouvé' });
        }
        res.status(200).json(productById);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la récupération du produit' });
    }
}

async function addProduct(req, res) {
    try {
        const { id, url, detailUrl, title, price, description } = req.body;
        const newProduct = new product({ id, url, detailUrl, title, price, description });
        await newProduct.save();
        res.status(201).json({ message: 'Produit ajouté avec succès' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de l\'ajout du produit' });
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
};
