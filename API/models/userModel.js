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
    Stream: {
        type: String,
        required: true,
        enum: ['Bio Science', 'Physical Science', 'E-technology'], // Specify the allowed dropdown options
    },
    profilePicture:{
        type:String,
        default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fuser-profile&psig=AOvVaw21qsX-EbCcGICXV1HsslhI&ust=1713585197698000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICEiruwzYUDFQAAAAAdAAAAABAE.avif'
    },

},
{timestamps:true});

const User = mongoose.model('User', userSchema);

export default User

