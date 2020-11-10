const express = require("express");
const bodyParser = require('body-parser');

const app = express();

// PUT, POST, GET, DELETE

const carArr = [
    {id: 1, name: "Hyundai Santa FE"},
    {id: 2, name: "Mercedes Benz"},
    {id: 3, name: "Toyota Yaris"}
]

// const authorization = (req, res, next) => {
//     console.log("authorization occured");
//     next();
// }

// app.use(authorization)
// app.use(bodyParser.urlencoded({extended: true}));

// parse application/json
app.use(bodyParser.json());

app.get('/cars', (req, res) => {
    res.send(carArr);
})

app.get('/cars/:id', (req, res) => {
    // console.log(req.params);
    const filteredData = carArr.filter(({id}) => id === parseInt( req.params.id ) );
    // console.log(filteredData);
    if (filteredData.length > 0) {
        res.send(filteredData);
    }else{
        res.status(400).send("No cars found");
    }
})

app.post("/cars", (req, res) => {

    carArr.push({
        id: carArr.length + 1,
        name: req.body.name
    });
    // console.log(carArr);

    res.send(carArr);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
})