const request = require("request");
const { response } = require("express");
const sentimentService = 'https://salty-retreat-84216.herokuapp.com/api/ml';

exports.postGetSentiment = (req, res, next) => {
    
    const resBody = req.body.review;

    request.post({
        url: `${sentimentService}/getKeywords/`, form: { "sentence": `${resBody}` }
    }, function responseFunc(err, response, body) {
        if (err) {
            res.status(400).send({ problem: `Sentiment Service responded with issue ${err}` });
        }
       
        const transformedBody=JSON.parse(body);
        let extractedKeywords = transformedBody.keywords;

        request.post({
            url: `${sentimentService}/getSentiment/`, form: { "sentence": `${resBody}` }
        },
            function responseFunc(err, response, body) {
                if (err) {
                    res.status(400).send({ problem: `Sentiment Service responded with issue ${err}` });
                }
                res.status(202).send({
                    keywords: extractedKeywords,
                    sentiment: body
                });
            })

    });
}
