require('dotenv').config();
const express = require('express');
const productRouts = required('./routes/productRoutes');
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.json({ message: "API running..."});
});

app.use('/api/products',productRouts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));