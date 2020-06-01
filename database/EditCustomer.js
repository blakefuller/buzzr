import AWS from '../AWS.config'
const config = require('../AWS.config.json')

let docClient = new AWS.DynamoDB.DocumentClient()

// edit a customer in the db
async function EditCustomer (customer) {
  var params = customer.notified_time
    ? {
        TableName: config.restaurant,
        Key: { customerID: customer.customerID },
        UpdateExpression: 'set #nt = :ntime',
        ExpressionAttributeNames: {
          '#nt': 'notified_time'
        },
        ExpressionAttributeValues: {
          ':ntime': customer.notified_time
        },
        ReturnValues: 'UPDATED_NEW'
      }
    : {
        TableName: config.restaurant,
        Key: { customerID: customer.customerID },
        UpdateExpression: `set #n = :name, 
                      #ps = :party_size`,
        ExpressionAttributeNames: {
          '#n': 'name',
          '#ps': 'party_size'
        },
        ExpressionAttributeValues: {
          ':name': customer.name,
          ':party_size': customer.party_size
        },
        ReturnValues: 'UPDATED_NEW'
      }

  return new Promise(resolve => {
    docClient.update(params, function (err, data) {
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

export default EditCustomer
