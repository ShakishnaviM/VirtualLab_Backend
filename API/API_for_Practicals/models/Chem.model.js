import mongoose from "mongoose"

const ChemistryListSchema = mongoose.Schema(
    {
        name: String
    },
    {
        timestamp: true
    }
)

const chemistryList = mongoose.model("chemistryList", ChemistryListSchema)
export default chemistryList