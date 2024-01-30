import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    user: {
        username: String,
        required: true 
    },
    cartItems: [
        {
            product: {
                id: String,
                required: true,
                // ref: 'Product'
            },
            quantity: {
                type: Number,
                default: 1
            },
            price: {
                price: Number,
                required: true
            }
        }
    ]
});

let Cart = mongoose.model('Cart', cartSchema);

export default Cart;