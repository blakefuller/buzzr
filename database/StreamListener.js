import AWS from '../AWS.config'
const config = require('../AWS.config.json')

let streamClient = new AWS.DynamoDBStreams()

async function HostNotifyListener() {
   var params = {
      StreamArn: 'arn:aws:dynamodb:us-west-2:538305643618:table/testaurant/stream/2020-05-10T06:04:59.351'
   }


   return new Promise(resolve => {
      streamClient.describeStream(params, (err, data) => {
         if (err) {
            console.log('error - ' + JSON.stringify(err, null, 2))
            resolve(false)
         } else {
            console.log(data)
            resolve(true)
         }
      })
      // streamClient.getRecords((err, data) => {
      //    if (err) {
      //       console.log('error - ' + JSON.stringify(err, null, 2))
      //       resolve(false)
      //    } else {
      //       console.log(data)
      //       resolve(true)
      //    }
      // })
   })
}

export default HostNotifyListener