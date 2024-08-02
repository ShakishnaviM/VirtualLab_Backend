import Subject from '../models/subject.model.js'



export const getSubjects = async (req,res) => {
    try {
        const subjects = await Subject.find({});
        res.status(200).json(subjects)
    } catch (error) {
    res.status(500).json({message:error.message})
    }
}

export const getsubject = async(req,res) => {
    try {
        const {id} =req.params;
        const oneSubject = await Subject.findById(id);
        res.status(200).json(oneSubject)

    } catch (error) {
    res.status(500).json({message:error.message});  
    }
}

export const createSubject = async(req,res) => {
    try {
        const subject = await Subject.create(req.body);
        res.status(200).json(subject)
       } catch (error) {
        res.status(500).json({message:error.message})
       }
}


export const updateSubject = async (req,res) => {
    try {
        const {id} =req.params;
        const updateOneSubject = await Subject.findByIdAndUpdate(id, req.body);

        if(!updateOneSubject){
            return res.status(400).json({message:"Subject not found"})
        }

        const updatedSubject =  await Subject.findById(id);
        res.status(200).json(updatedSubject)

    } catch (error) {
    res.status(500).json({message:error.message});  
    }
}

export const deleteSubject = async(req,res) => {
    try {
        const {id} = req.params;
        const deleteSubject = await Subject.findByIdAndDelete(id);

        if(!deleteSubject){
            return res.status(400).json({message:"Subject not found"})

        }
        res.status(200).json({message: "Subject deleted successfully"})

    } catch (error) {
        
    }
}

