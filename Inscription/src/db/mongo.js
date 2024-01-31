const mongoose = require('mongoose');

const clientOptions = {
    useNewUrlParser   : true,
    useUnifiedTopology: true
};

exports.initClientDbConnection = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017', clientOptions)
        console.log('Connected');
    } catch (error) {
        console.log(error);
        throw error;
    }
}