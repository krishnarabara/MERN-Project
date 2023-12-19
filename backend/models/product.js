const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStack: {
        type: Number,
        required: true
    },
    imageurl: {
        type: String,
        required: true
    }
})

const product = mongoose.model('product',productSchema);

module.exports = product;