const router = require("express").Router();
const path = require("path");

//HOME PAGE
router.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "../public/index.html"))
})

//HOME PAGE AND DISPLAYING LAST EXERCISE LOGGED
router.get("/exercise", function(req, res){
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

//STATS PAGE
router.get("/stats", function(req, res){
  res.sendFile(path.join(__dirname, "../public/stats.html"))
})

module.exports = router