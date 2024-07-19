import mongoose from 'mongoose';
const SubjectSchema = mongoose.Schema(
    {
        name: String
    },
    {
        timestamp: true
    }
);

const Subject = mongoose.model("Subject", SubjectSchema)
export default Subject