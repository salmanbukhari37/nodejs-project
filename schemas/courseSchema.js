const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
        minlength: 3,
        required: true
    },
    author: {
        type: String,
        maxlength: 100,
        minlength: 3,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const CourseSchema = mongoose.model('course', courseSchema);

module.exports = CourseSchema;