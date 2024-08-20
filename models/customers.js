const mongoose = require("mongoose");
const customersSchema = mongoose.Schema({
    customerName :{
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    pass : {
        type : String,
    },
    phone : {
        type : String,
    },
    address : {
        type : String,
    },
    role : {
        type : String,
    }
});
module.exports = mongoose.model("Customer",customersSchema);