var AWS = require('aws-sdk/dist/aws-sdk-react-native');

var credentials = new AWS.SharedIniFileCredentials();
AWS.config.credentials = credentials;

var dbConfig = require('./dbConfig.json');
AWS.config.update(dbConfig);

export default AWS