const express =require("express");
const surveyRouter = require("./routes/surveyRoutes");
const userRouter = require("./routes/userRoutes");

const app= express();

app.use(express.json());

app.use("/users",userRouter);
app.use("/survey",surveyRouter);
 
const mongoose=require("mongoose");

app.get("/",(req,res)=>{
    res.send("hello");
});


mongoose.connect("mongodb+srv://saurabhyadav388:mypassword@cluster0.a0hvsaj.mongodb.net/")
.then(()=>{

    app.listen(5000,()=>{
        console.log("My Server started on 5000")
    });

})
.catch((error)=>{
    console.log(error);
})
 