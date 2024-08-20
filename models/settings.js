const mongoose = require("mongoose");
const settingsSchema = mongoose.Schema({
    websiteName : {
        type : String,
    },
    websiteLogo : {
        type : String,
    },
    websitFooter : {
        type : String,
    },
});
module.exports = mongoose.model("Setting",settingsSchema);