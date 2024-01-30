// Importer les modules nécessaires
const kart = require('../model/kart');

async function getKart(req, res) {
    try {
        const { username } = req.params;
        const userKart = await kart.findOne({ user: username });
        if (!userKart) {
            return res.status(404).json({ message: 'Panier non trouvé' });
        }
        res.status(200).json(userKart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la récupération du panier' });
    }
}

async function addProductToKart(req, res) {
    try {
        const { username } = req.params;
        const { product, quantity, price } = req.body;
        const userKart = await kart.findOne({ user: username });
        if (!userKart) {
            const newUserKart = new kart({ user: username, cartItems: [{ product, quantity, price }] });
            await newUserKart.save();
            return res.status(201).json({ message: 'Produit ajouté au panier' });
        }
        const existingProduct = userKart.cartItems.find(item => item.product === product);
        if (existingProduct) {
            existingProduct.quantity += quantity;
            await userKart.save();
            return res.status(200).json({ message: 'Produit ajouté au panier' });
        }
        userKart.cartItems.push({ product, quantity, price });
        await userKart.save();
        res.status(200).json({ message: 'Produit ajouté au panier' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de l\'ajout du produit au panier' });
    }
}

async function removeProductFromKart(req, res) {
    try {
        const { username } = req.params;
        const { product } = req.body;
        const userKart = await kart.findOne({ user: username });
        if (!userKart) {
            return res.status(404).json({ message: 'Panier non trouvé' });
        }
        const existingProduct = userKart.cartItems.find(item => item.product === product);
        if (!existingProduct) {
            return res.status(404).json({ message: 'Produit non trouvé' });
        }
        userKart.cartItems = userKart.cartItems.filter(item => item.product !== product);
        await userKart.save();
        res.status(200).json({ message: 'Produit retiré du panier' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la suppression du produit du panier' });
    }
}

module.exports = {
    getKart,
    addProductToKart,
    removeProductFromKart
};