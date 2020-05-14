import AWS from '../AWS.config';
const config = require('../AWS.config.json');

let docClient = new AWS.DynamoDB.DocumentClient();

async function EditWaittimes(waittimes) {

  var params = {
    TableName: config.restaurant,
    Key: { customerID: 'wait_times' },
    UpdateExpression: `set #1 = :1, #2 = :2,
                      #4 = :4, #6 = :6, #8 = :8`,
    ExpressionAttributeNames: {
      "#1": "1",
      "#2": "2",
      "#4": "4",
      "#6": "6",
      "#8": "8+"
    },
    ExpressionAttributeValues: {
      ":1": waittimes.one,
      ":2": waittimes.two,
      ":4": waittimes.four,
      ":6": waittimes.six,
      ":8": waittimes.eightplus
    },
    ReturnValues: "UPDATED_NEW"
  }

  return new Promise(resolve => {
    docClient.update(params, function (err, data) {
      if (err) {
        console.log("error - " + JSON.stringify(err, null, 2));
        resolve(false);
      }
      else {
        console.log("success - " + JSON.stringify(data, null, 2));
        resolve(true);
      }
    })
  })
}

export default EditWaittimes;