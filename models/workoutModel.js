const router = require("express").Router();
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema({

        day: {
            type: Date,
            required: 'Enter a date',
            default: () => new Date ()
        },
        exercises: [
            {
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

                },
                sets: {
                    type: Number,

                },
                weight: {
                    type: Number,

                },
                reps: {
                    type: Number,

                }
            }
        ]
        
    },
    {
        toJSON: {
            virtuals: true
        }
    }
    )


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;