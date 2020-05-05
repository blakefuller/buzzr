var AWS = require('aws-sdk');

// var credentials = new AWS.SharedIniFileCredentials();
// AWS.config.credentials = credentials;

// var dbConfig = require('./dbConfig.json');
var config = require('./AWS.config.json');
AWS.config.update(config);

export default AWS