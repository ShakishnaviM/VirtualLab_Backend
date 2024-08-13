import practicalRegister from "../../models/practicalRegisterModel.js";

export const saveQuizData = async (req,res) => {
    console.log(req.body);
    try {
        const practicalData = new practicalRegister(req.body);
        const savedPractical = await practicalData.save();
        res.status(201).json(savedPractical);
    } catch (error) {
        res.status(400).json({ message: 'Error saving practical data', error });
    }
}