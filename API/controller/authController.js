import User from "../models/userModel.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../Utils/error.js";
import jwt from 'jsonwebtoken';

export const signUp = async (req, res, next) => {
    const { username, email, password, Stream } = req.body;


    // Check if password is provided
    if (!password) {
        return res.status(400).json({ message: "Password is required" });
    }

    try {
        // Hash the password
        const hashedPassword = bcryptjs.hashSync(password, 15);

        // Create a new user with the hashed passwor
        const newUser = new User({ username, email, password: hashedPassword, Stream });

        // Save the new user
        await newUser.save();

        // Respond with success message
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        // Pass any error to the error handling middleware
        next(error);
    }
};


export const signIn = async(req, res, next) =>{
    const{email, password} = req.body;

    try{
        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandler(404, 'User not found'));

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(401, 'Wrong credentials'));

        const token = jwt.sign({id : validUser._id }, process.env.JWT_SECRET);
        const {password: hashedPassword, ...rest} = validUser._doc;
        const expiryDate = new Date(Date.now()+3600000); //1hour
        res
            .cookie('access_token', token, {httpOnly:true, expires: expiryDate})
            .status(200)
            .json(rest);
    }catch(error){
        next(error);
    }
}