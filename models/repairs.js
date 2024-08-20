const mongoose = require("mongoose");
const repairSchema = mongoose.Schema({
    catogary :{
        type : String,
        required : true,
    },
    damageType : {
        type : String,
    },
    uuid : {
        type : String,
    },
    advancedAmt : {
        type : String,
    },
    due : {
        type : String,
    },
    repairStatus : {
        type : String,
    },
    bookedDate : {
        type : Date,
        default : Date.now,
    },
    returnDate : {
        type : Date,
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
module.exports = mongoose.model("Repair",repairSchema);