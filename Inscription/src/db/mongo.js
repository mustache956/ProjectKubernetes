const mongoose = require('mongoose');

const clientOptions = {
    useNewUrlParser   : true,
    useUnifiedTopology: true
};

exports.initClientDbConnection = async () => {
    try {
        await mongoose.connect('mongodb://cloud-eshop.com/mongodb:27017', clientOptions)
        console.log('Connected');
    } catch (error) {
        console.log(error);
        throw error;
    }
}