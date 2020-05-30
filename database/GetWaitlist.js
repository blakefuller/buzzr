import AWS from '../AWS.config'
const config = require('../AWS.config.json')

let docClient = new AWS.DynamoDB.DocumentClient()

// retrieve the whole waitlist of customers
async function GetWaitlist () {
  var params = {
    TableName: config.restaurant,
    FilterExpression: 'customerID <> :wt and customerID <> :l',
    ExpressionAttributeValues: { ':wt': 'wait_times', ':l': 'logs' }
  }

  return new Promise(resolve => {
    docClient.scan(params, function (err, data) {
      if (err) {
        console.log('error - ' + JSON.stringify(err, null, 2))
        resolve(false)
      } else {
        // console.log('success - ' + JSON.stringify(data, null, 2))
        resolve(data)
      }
    })
  })
}

export default GetWaitlist
