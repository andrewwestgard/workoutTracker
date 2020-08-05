const router = require("express").Router();
const mongoose = require('mongoose')


const fitnessTracker = mongoose.Schema ({
    fitnessTracker = new mongoose.Schema ({
        exercise: {
            type: String,
            trim: false,
            required: 'enter a exercise'
        },
        duration: {
            type: Number,
            required: 'enter a number'
        },
        cardio_training: {
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
        },
        resistance_duration: {
            type: Number,
            required: 'enter resistance duration'
        },
        date: {
            type: Date,
            default: Date.now
        }
    })
})

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;