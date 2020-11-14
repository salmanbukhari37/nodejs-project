const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/school_system", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('mongodb connected successfully'))
    .catch(err => console.log(err));
