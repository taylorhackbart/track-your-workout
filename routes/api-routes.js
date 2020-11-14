const router = require("express").Router();
const { db } = require("../models/model.js");
const Workout = require("../models/model.js");
const seeds = require("../seeders/seed.js")

Workout.create(req.body)
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
    .limit(7)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", function ({body, params}, res) {
  Workout.findByIdAndUpdate(params.id, 
    { $push: 
      { exercises: body }}, 
      { new: true })
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
