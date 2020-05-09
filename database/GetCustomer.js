import AWS from '../AWS.config'
const config = require('../AWS.config.json');

let docClient = new AWS.DynamoDB.DocumentClient();

async function GetCustomer(id, checkin) {

    var params = {
        TableName: config.restaurant,
        Key: {
            "customerID": id,
            "checkin_time": checkin
        },
        AttributesToGet: [
            "customerID",
            "name",
            "party_size",
            "checkin_time"
        ]
    };

    return new Promise(resolve => {
        docClient.get(params, function (err, data) {
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

export default GetCustomer;