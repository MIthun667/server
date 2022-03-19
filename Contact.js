const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    email: {
        type: String,
        required: false,
        trim: true
    },
    
});
  
const Contact = mongoose.model("Contact", ContactSchema);
  
module.exports = Contact;