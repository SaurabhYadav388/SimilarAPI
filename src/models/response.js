const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  surveyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Survey' }, 
  responses: [
    {
      questionNumber: Number,
      selectedOption: Number,
    },
  ],
});

const UserResponse = mongoose.model('UserResponse', responseSchema);

module.exports = UserResponse;
