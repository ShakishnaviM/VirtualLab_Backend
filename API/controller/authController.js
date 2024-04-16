import User from "../models/userModel.js"
import bcryptjs from 'bcryptjs';


export const signUp = async (req, res, next) => {
    const {username, email, password, Stream} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 15);
    const newUser = new User({username, email, password:hashedPassword, Stream});

    try{ 
        await newUser.save();
        res.status(201).json({ message: "User created successfully"});

    }catch(error){
        next(error);
  }
   

};