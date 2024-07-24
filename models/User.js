import mongoose from "mongoose";

const UserSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const UserModel= mongoose.models.UserModel ||  mongoose.model('UserModel',UserSchema);
export default UserModel