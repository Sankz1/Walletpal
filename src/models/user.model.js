import mongoose from 'mongoose';
//Se crea esquema universal de usuarios
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,

    }
})
export default mongoose.model('User', userSchema);