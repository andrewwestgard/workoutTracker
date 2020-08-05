const Workout = require('../models/workoutModel')
var router = require('express').Router()


router.post('/api/workouts', ({body}, res) => {
    Workout.create(bodu)
        .then(workout => {
            res.json(dbExercise)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

router.get('/api/workouts', (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.get('/api/workouts/range', (req, res)  => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.put('api/workouts/range', (req, res) => {
    Workout.update({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

module.exports = router;