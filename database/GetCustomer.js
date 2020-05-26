import AWS from '../AWS.config'
const config = require('../AWS.config.json')

let docClient = new AWS.DynamoDB.DocumentClient()

// retrieve a specific customer by id
async function GetCustomer (id) {
  var params = {
    TableName: config.restaurant,
    KeyConditionExpression: 'customerID = :id',
    ExpressionAttributeValues: {
      ':id': id
    }
  }

  return new Promise(resolve => {
    docClient.query(params, function (err, data) {
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

export default GetCustomer
