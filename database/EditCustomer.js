import AWS from '../AWS.config';
const config = require('../AWS.config.json');

let docClient = new AWS.DynamoDB.DocumentClient();

async function EditCustomer(customer) {

    var params = {
        TableName: config.restaurant,
        Key: {"customerID": customer.customerID},
        UpdateExpression:  `set name = :name, 
                            party_size = :party_size, 
                            checkin_time = :time`,
        ExpressionAttributeValues: {
            ":name": customer.name,
            ":party_size": customer.party_size,
            ":time": customer.checkin_time
        },
        ReturnValues: "UPDATED_NEW"
    };

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

export default EditCustomer;