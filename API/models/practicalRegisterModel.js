import mongoose from "mongoose";

const practicalRegisterSchema = new mongoose.Schema({
    userID:{
        type:String,
        require:true,
    },
    practicalID:{
        type:String,
        require:true,
    },
    practicalSubject:{
        type:String,
        require:true,
    },
    completed:{
        type:Boolean,
        require:true,
    },
    correct_answers:{
        type:String
    },
    wrong_answers:{
        type:String
    }
},
{timestamps:true});

const practicalRegister = mongoose.model('practicalRegister', practicalRegisterSchema);

export default practicalRegister