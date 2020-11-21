const router = require("express").Router();
const Workout = require("../models/workout.js");

//FINDING MOST RECENT DATA ALREADY IN THE DATABASE TO DISPLAY ON HOME PAGE (most recent workout logged)
router.get("/api/workouts", function (req, res) {
  Workout.find()
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//POSTING A NEW WORKOUT
router.post("/api/workouts", function (req, res) {
  Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//FIND ALL DATA AND POST TO STATS PAGE
router.get("/api/workouts/range", function (req, res) {
  Workout.find({})
    .limit(7)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//CONTINUE WORKOUT AND UPDATE
router.put("/api/workouts/:id", function (req, res) {
  Workout.findOneAndUpdate({_id: req.params.id}, 
    { $push: { exercises: req.body }}, 
      { new: true })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//NO DELETE BUTTON, BUT USEFUL FOR POTENTIAL ADD-ONS IN THE FUTURE
router.delete("/api/workouts", function ({body}, res){
  Workout.findByIdAndDelete(body.id)
  .then(() => {
    res.json(true)
  })
  .catch (err => {
    res.json(err)
  })
})
module.exports = router;
