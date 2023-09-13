const userModel=require("../models/users");
const bcrypt =require("bcrypt");
const jwt =require("jsonwebtoken")
const SECRET_KEY ="MYKEY";


const signup= async(req,res)=>{

    //check if existing
    const { username, password } = req.body    
    console.log('Username:', username);
    console.log('Password:', password);
  
    try{
        const existingUser=await userModel.findOne({username: username});
        if(existingUser)
        {
            return res.status(400).json({message: "User already exist"});
        }

        const hashedPassword =await bcrypt.hash(password,10);
        
        const result= await userModel.create({
            username:username,
            password:hashedPassword,
        });

        const token =jwt.sign({username: result.username,id: result._id}, SECRET_KEY)
        res.status(201).json({user:result,token:token});

    }catch(error){
        console.log(error);
        res.status(500).json({message:"something went wrong"});
    }

}

const signin=async(req,res)=>{

    const {username,password} =req.body;

    try{
        const existingUser=await userModel.findOne({username: username});
        if(!existingUser)
        {
            return res.status(404).json({message: "User not found"});
        }

        const matchPassword = await bcrypt.compare(password,existingUser.password);

        if(!matchPassword)
        {
            return res.status(400 ).json({message: "Invalid Password"});
        }

        const token =jwt.sign({username:existingUser.username,id : existingUser._id},SECRET_KEY);
        res.status(201).json({user:existingUser,token:token});
    }catch(error){
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    
    }


    
}

module.exports={signup,signin};