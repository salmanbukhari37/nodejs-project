const { resolveAny } = require("dns");
const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {'content-type': "text/html"});

    var url = req.url;

    if( url === "/"){
        res.write("Welcome to home page");
        res.end();
    }

    if( url === "/about-us") {
        res.write("Welcome to About us page");
        res.end();
    }

    // res.write('Hey I also called now')

}).listen(3000, function () {
    console.log('Server has been started on port 3000');
})