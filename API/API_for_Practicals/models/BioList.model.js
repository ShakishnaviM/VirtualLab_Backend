import mongoose from 'mongoose';

const bioListSchema = mongoose.Schema(
    {
        name: {type: String}, 
        image:{type: String ,require:false}   
    },
    {
        timestamp: true
    }
)

const bioList = mongoose.model("BioList", bioListSchema)
export default bioList