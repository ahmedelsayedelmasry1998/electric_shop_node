const mongoose = require("mongoose");
const servicesSchema = mongoose.Schema({
    discount : {
        type : Number,
    },
    status : {
        type : Number,
    },
    uuid : {
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
module.exports = mongoose.model("Service",servicesSchema);