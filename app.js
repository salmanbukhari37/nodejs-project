require("./db_conn/connection");
const express = require("express");
const bodyParser = require('body-parser');

const courseRoutes = require('./routes/courses');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use('/courses', courseRoutes); // /courses/courses

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
})