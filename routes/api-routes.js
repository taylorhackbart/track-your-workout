const router = require("express").Router();
const Workout = require("../models/workout.js");

Workout.create({workoutSeed: {}})
.then(dbWorkout => {
  console.log(dbWorkout)
})
.catch (({message})=> {
  console.log(message)
})

router.get("/api/workouts", function (req, res) {
  Workout.find()
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", function (req, res) {
  Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", function (req, res) {
  Workout.find({})
    // .populate(workoutSeed)
    .limit(7)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", function ({body, params}, res) {
  Workout.update(params.id, 
    { $push: 
      { exercises: body }}, 
      { new: false })
    .then((dbWorkout) => {
      console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

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
