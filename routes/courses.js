const express = require('express');
const routes = express.Router();
const courseSchema = require('../schemas/courseSchema');

routes.get('/',  async (req, res) => {
    const result = await courseSchema.find().select({name: 1});

    // SELECT name FROM course;

    res.send(result);
    // console.log(result);
});

// async function getData () {
//     await 
// }


// function getData () {
//     return new Promise((resolver) => {
//         resolver;
//     });
// }

// console.log(getData())



routes.post('/', async (req, res)=> {
    const course = new courseSchema({
        name: req.body.name,
        author: req.body.author
    });

    try {
        const result = await course.save();

        res.send(result);
    }catch (ex) {
        // console.log(ex.message);
        res.send(ex.message);
    }
})

module.exports = routes;