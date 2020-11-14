const router = require("express").Router();
const Workout = require("../models/model.js");

router.get("/api/workouts", function (req, res) {
  Workout.find({})
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

router.post("/api/workouts/:id", function (req, res) {
  Workout.findByIdAndUpdate(req.body, { $push: { exercises: body } }, { new: true })
    .then((dbWorkout) => {
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
