const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Exercise type is required"
      },
      name: { 
        type: String,
        required: "Type of exercise is required"
      },
      duration: {
        type: Number,
        required: "Duration of exercise is required"
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
})
module.exports = mongo.define("Transaction", workoutSchema)