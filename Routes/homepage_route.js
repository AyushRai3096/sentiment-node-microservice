const express = require("express");

const homepageController = require("../Controllers/Homepage_Controller/getHomepage");
const getSentimentController = require("../Controllers/Get_Sentiment_Controller/postGetSentiment");

const router = express.Router();

router.route("/").get(homepageController.getHomepage);
router.route("/get-sentiment").post(getSentimentController.postGetSentiment);

module.exports = router;