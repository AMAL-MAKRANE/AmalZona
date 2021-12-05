import mongoose from 'mongoose';

const userShema =new mongoose.Schema({
    name: {type: String, required: true},
    email:{type: String, required: true, unique: true},
    password:{ type: String, required:true},
    isAdmin: {type:Boolean, default:false,required: true},


}, {
    timestamps:true,
});
const User = mongoose.model('User', userShema);
export default User;