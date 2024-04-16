import User from "../models/userModel.js";
import bcryptjs from 'bcryptjs';

export const signUp = async (req, res, next) => {
    const { username, email, password, Stream } = req.body;

    console.log(req.body);
    console.log(req.body.username);
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.Stream);


    // Check if password is provided
    if (!email) {
        return res.status(400).json({ message: "Password is required" });
    }

    try {
        // Hash the password
        const hashedPassword = bcryptjs.hashSync(password, 15);

        // Create a new user with the hashed password
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
