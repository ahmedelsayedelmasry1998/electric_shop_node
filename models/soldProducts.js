const mongoose = require("mongoose");
const soldSchema = mongoose.Schema({
    quatity : {
        type : Number,
    },
    price : {
        type : Number,
    },
    soldDate : {
        type : Date,
        default : Date.now,
    },
    soldStatus : {
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
module.exports = mongoose.model("Sold",soldSchema);