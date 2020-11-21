const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//WORKOUT SCHEMA FOR RESISTANCE AND CARDIO
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
}, {
  toJSON: {
    virtuals: true
  }
});
workoutSchema.virtual("totalDuration").get(function(){
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0)
})
const Workout = mongoose.model("Workout", workoutSchema)
module.exports = Workout