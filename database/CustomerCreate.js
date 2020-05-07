import AWS from '../AWS.config'

let docClient = new AWS.DynamoDB.DocumentClient()

async function CreateCustomer (customer) {
  var params = {
    TableName: 'testaurant',
    Item: customer
  }

  // promise to return status of create operation
  return new Promise(resolve => {
    docClient.put(params, function (err, data) {
      if (err) {
        console.log('error - ' + JSON.stringify(err, null, 2))
        resolve(false)
      } else {
        console.log('success - ' + JSON.stringify(data, null, 2))
        resolve(true)
      }
    })
  })
}

export default CreateCustomer
