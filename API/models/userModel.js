import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    phoneNumber:{
        type:Number,
        require:true,
        unique:true,
    },

    Stream: {
        type: String,
        required: true,
        enum: ['Bio Science', 'Physical Science', 'E-technology'], // Specify the allowed dropdown options
    }

},{timestamps:true});

const User = mongoose.model('User', userSchema);

export default User

