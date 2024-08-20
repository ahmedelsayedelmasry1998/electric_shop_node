const mongoose = require("mongoose");
const productsSchema = mongoose.Schema({
    productName :{
        type : String,
        required : true,
    },
    title : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
    },
    descraption : {
        type : String,
    },
    image : {
        type : String,
    },
    productDate : {
        type : Date,
        default : Date.now,
    },
    productLeft : {
        type : String,
    },
    author : {
            type : String, 
    }
});
module.exports = mongoose.model("Product",productsSchema);