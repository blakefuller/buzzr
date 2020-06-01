import AWS from '../AWS.config'
const config = require('../AWS.config.json')

let docClient = new AWS.DynamoDB.DocumentClient()

async function HostNotify(status) {
   var params = {
      TableName: config.restaurant,
      Key: { customerID: 'wait_times' },
      UpdateExpression: `set host_notify_alert = :status`,
      ExpressionAttributeValues: {
         ':status': status
      },
      ReturnValues: 'UPDATED_NEW'
   }

   return new Promise(resolve => {
      docClient.update(params, (err, data) => {
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

export default HostNotify