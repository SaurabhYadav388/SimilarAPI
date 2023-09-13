const express=require("express");
const auth=require("../middlewares/auth");
const { getSurvey, createSurvey } = require("../controllers/surveyController");
const surveyRouter=express.Router();

surveyRouter.get("/",auth,getSurvey);

surveyRouter.post("/",auth,createSurvey);

module.exports=surveyRouter