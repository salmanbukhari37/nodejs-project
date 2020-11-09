const express = require("express");
const app = express();


app.get('/get-data', (req, res) => {
    // fetch db data
    const dbData = {
        name: "salman",
        age: 29,
        hobbies: ["programming"]
    }

    res.send(dbData);
})

app.get('/get-cars', (req, res) => {
    const dbCarData = {
        name: "Honda Civic",
        color: "Black",
        transmission: "automatic"
    }

    res.send(dbCarData);
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
})