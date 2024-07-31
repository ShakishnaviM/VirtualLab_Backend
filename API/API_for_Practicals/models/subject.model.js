import mongoose from 'mongoose';
const SubjectSchema = mongoose.Schema(
    {
        name: {type: String}, 
        image:{type: String ,require:false}   
    },
    {
        timestamp: true
    }
);

const Subject = mongoose.model("Subject", SubjectSchema)
export default Subject