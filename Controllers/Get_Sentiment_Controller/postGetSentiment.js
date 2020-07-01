const request = require("request");
const { response } = require("express");
const sentimentService = 'https://salty-retreat-84216.herokuapp.com/api/ml';

exports.postGetSentiment = (req, res, next) => {
    const body = req.body.review;
    console.log(body);

    request.post({
        url: `${sentimentService}/getKeywords`, form: { "sentence": `${body}` }
    }, function responseFunc(err, response, body) {
        if (err) {
            res.status(400).send({ problem: `Sentiment Service responded with issue ${err}` });
        }

        request.post({
            url: `${sentimentService}/getSentiment`, form: { "sentence": `${body}` }
        },
            function responseFunc(err, response, body) {
                if (err) {
                    res.status(400).send({ problem: `Sentiment Service responded with issue ${err}` });
                }
                console.log(body);
                res.status(202).send(body);
            })

    });
}
