require("dotenv").config();

const productData = require("./data/products");
const connectDB = require("./config/db");
const product = require("../models/product");

connectDB();

const importData = async () => {
    try {
        await product.deleteMany({});
       
        await product.insertMany(productData);

        console.log("Data Import Success");

        process.exit();
    } catch (error) {
        console.error("Error with data import", error);
        process.exit(1);
    }
};

importData();


  