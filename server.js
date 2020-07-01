const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const homepageRouter = require("./Routes/homepage_route");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(homepageRouter);

var server_port = process.env.PORT || 8888;

var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

const server = http.createServer(app);
server.listen(server_port, server_ip_address, () => {
    console.log("Server running at port 8081");
});