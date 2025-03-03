import express from "express";
import jwt from "jsonwebtoken";
import multer from "multer";
import User from "../models/User.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

//user register

router.post("/register", upload.single("profileImage"), async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const profileImage = req.file;

    if (!profileImage) {
      return res.status(400).send("Please upload a profile image");
    }
    const profileImagePath = profileImage.path;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      profileImagePath,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully", user: newUser });
} catch (err) {
    res.status(500).json({ message: "Registration failed", error: err.message });

  }




});

//user login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user=await user.findOne({email})
    if(!user){
      return res.status(404).json({message:"User not found"});
    } 
    const isMatch =await compare(password,user.password);
    if(!isMatch){
      return res.status(400).json({message:"Invalid credentials"});
    }
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET);   
    delete user.password;     
    res.status(200).json({token,user}); 

  } catch (err) {
    console.log(err)
    res.status(500).json({message:"Login failed",error:err.message});                               

  }



});
export default router ;