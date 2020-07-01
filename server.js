const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const homepageRouter = require("./Routes/homepage_route");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(homepageRouter);

const server = http.createServer(app);
server.listen(8081, () => {
    console.log("Server running at port 8081");
});