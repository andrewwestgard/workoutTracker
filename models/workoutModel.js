const router = require("express").Router();
const mongoose = require('mongoose')


const Workout = mongoose.Schema ({

        day: {
            type: Date,
            required: 'Enter a date'
        },
        type: {
            type: String,
            trim: false,
            required: 'enter a exercise'
        },
        duration: {
            type: Number,
            required: 'enter a number'
        },
        name: {
            type: String,
            required: 'enter the type of cardio'
        },
        distance: {
            type: Number,
            required: 'enter the distance of the workout'
        },
        weight: {
            type: Number,
            required: 'enter a weight'
        },
        sets: {
            type: Number,
            required: 'enter a set number'
        },
        weight: {
            type: Number,
            required: 'enter the weight of your workout'
        },
        reps: {
            type: Number,
            required: 'enter set amount'
        }
    })


// const Workout = mongoose.model("Workout", Workout);

module.exports = Workout;