const mongoose = require("mongoose");
const emailsSchema = mongoose.Schema({
    email :{
        type : String,
        required : true,
    },
    subject : {
        type : String,
    },
    message : {
        type : String,
    }
});
module.exports = mongoose.model("Email",emailsSchema);