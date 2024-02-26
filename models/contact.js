import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    _id: String,
    firstname: {
        type: String,
        required: true
    },
    lastname: String,
    email: {
        type: String,
        required: true
    },
    city: String,
    mobile: Number
})

export default mongoose.model('Contact', contactSchema, 'contacts');