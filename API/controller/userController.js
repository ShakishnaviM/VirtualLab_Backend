import {errorHandler} from '../Utils/error.js'
import bcryptjs from 'bcryptjs';
import User from '../models/userModel.js';

export const test = (req, res) => {
    res.json({
        message: 'API is working',
    });
};

//update user
export const updateUser = async(req, res, next) =>{
    if(req.user.id !== req.params.id){
        return next(errorHandler(401, 'You can update only your account!'))
    }
    try{
        if(req.body.password){
            req.body.password = bcryptjs.hashSync(req.body.password, 15);
        }
        const updatedUser = await User.findByIdAndUpdate
           ( req.params.id,
            {
                $set:
                    {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    }
            },
            {new :true}
        );
        const {password, ...rest} = updatedUser._doc;
        res.status(200).json(updatedUser);


    }catch{
        next(error);
         
    }
}