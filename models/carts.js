const mongoose = require("mongoose");
const cartsSchema = mongoose.Schema({
    product :{
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    quantity : {
        type : Number,
    },
    cartStatus : {
        type : String,
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Email",
        required : true,
    },
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product",
        required : true,
    }
});
module.exports = mongoose.model("Cart",cartsSchema);