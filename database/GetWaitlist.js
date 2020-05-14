import AWS from '../AWS.config';
const config = require('../AWS.config.json');

let docClient = new AWS.DynamoDB.DocumentClient()

async function GetWaitlist () {
  var params = {
    TableName: config.restaurant,
    FilterExpression: "customerID <> :wt",
    ExpressionAttributeValues: {":wt": "wait_times"}
  }

  return new Promise(resolve => {
    docClient.scan(params, function (err, data) {
      if (err) {
        console.log('error - ' + JSON.stringify(err, null, 2))
        resolve(false)
      } else {
        console.log('success - ' + JSON.stringify(data, null, 2))
        resolve(data)
      }
    })
  })
}

export default GetWaitlist
