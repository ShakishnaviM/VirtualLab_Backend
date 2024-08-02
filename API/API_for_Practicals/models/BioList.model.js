import mongoose from 'mongoose';

const bioListSchema = mongoose.Schema(
    {
        name: String
    },
    {
        timestamp: true
    }
)

const bioList = mongoose.model("BioList", bioListSchema)
export default bioList