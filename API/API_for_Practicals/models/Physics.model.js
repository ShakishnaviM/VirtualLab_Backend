import mongoose from "mongoose"

const physicsListSchema = mongoose.Schema(
    {
        name: String
    },
    {
        timestamp: true
    }
)

const physicsList = mongoose.model("physicsList", physicsListSchema)
export default physicsList