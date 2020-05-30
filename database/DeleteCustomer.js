import AWS from '../AWS.config'
const config = require('../AWS.config.json')

let docClient = new AWS.DynamoDB.DocumentClient()

// deletes a customer from the db
async function DeleteCustomer (id) {
  var params = {
    TableName: config.restaurant,
    Key: {
      customerID: id
    }
  }

  return new Promise(resolve => {
    docClient.delete(params, function (err, data) {
      if (err) {
        console.log('error - ' + JSON.stringify(err, null, 2))
        resolve(false)
      } else {
        // console.log('success - ' + JSON.stringify(data, null, 2))
        resolve(true)
      }
    })
  })
}

export default DeleteCustomer
