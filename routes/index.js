var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var ipaddressHeader, languageHeader, softwareHeader;
  var ipaddressHeader = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var languageHeader = req.headers['accept-language'];
  var softwareHeader = req.headers['user-agent'];
  var positionOfComma = languageHeader.indexOf(",");
  var positionOfOpenParen = softwareHeader.indexOf("(");
  var positionOfCloseParen = softwareHeader.indexOf(")");
  console.log(positionOfCloseParen);
  languageHeader = languageHeader.slice(0, positionOfComma);
  softwareHeader = softwareHeader.slice(positionOfOpenParen + 1, positionOfCloseParen);
  var headerObj = {
    ipaddress: ipaddressHeader,
    language: languageHeader,
    software: softwareHeader
  }
  res.send(headerObj);
});

module.exports = router;
