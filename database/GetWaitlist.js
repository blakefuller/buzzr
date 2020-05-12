import AWS from '../AWS.config'

let docClient = new AWS.DynamoDB.DocumentClient()

async function GetWaitlist () {
  var params = {
    TableName: 'testaurant',
    AttributesToGet: [
      'customerID',
      'name',
      'party_size',
      'checkin_time',
      'phone_number'
    ]
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
