var AWS = require('aws-sdk');

var credentials = new AWS.SharedIniFileCredentials();
AWS.config.credentials = credentials;

var dbConfig = require('./dbConfig.json');
AWS.config.update(dbConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
export default docClient;