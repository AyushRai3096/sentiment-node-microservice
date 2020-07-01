const request = require("request");
const { response } = require("express");
const sentimentService = 'http://localhost:8082';

exports.postGetSentiment = (req, res, next) => {
    const body = req.body.review;
    console.log(body);

    request.post({
        url: `${sentimentService}/sentiment`, form: { "review": `${body}` }
    }, function responseFunc(err, response, body) {
        if (err) {
            res.status(400).send({ problem: `Sentiment Service responded with issue ${err}` });
        }
        console.log(body);
        res.status(202).send(body);
    });



}
