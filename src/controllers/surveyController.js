const surveyModel=require("../models/surveys");

const createSurvey=(req,res)=>{
    res.send({message: 'post sur'});
}

const getSurvey=(req,res)=>{
    res.send({message: 'get sur'});

}

module.exports={
    createSurvey,
    getSurvey
}