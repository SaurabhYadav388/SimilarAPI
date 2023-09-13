const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  optionNumber: Number, 
  optionText: String
});

const questionSchema = new mongoose.Schema({
  questionNumber: Number,
  questionText: String, 
  options: [optionSchema]
});

const surveySchema = new mongoose.Schema({
  title: String, 
  questions: [questionSchema]
});

module.exports =mongoose.model('Survey', surveySchema);