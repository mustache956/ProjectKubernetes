
// Importer les modules nécessaires
const User = require('../models/user');
const bcrypt = require('bcrypt');

// Contrôleur pour l'inscription d'un utilisateur
async function registerUser(req, res) {
  try {
    const { username, password } = req.body;

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Cet utilisateur existe déjà' });
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de l\'enregistrement de l\'utilisateur' });
  }
}

// Contrôleur pour la connexion d'un utilisateur
async function loginUser(req, res) {
  try {
    const { username, password } = req.body;

    // Vérifier si l'utilisateur existe
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    res.status(200).json({ message: 'Connexion réussie' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la connexion de l\'utilisateur' });
  }
}

module.exports = {
  registerUser,
  loginUser,
};
