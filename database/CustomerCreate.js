import AWS from '../AWS.config';

let docClient = new AWS.DynamoDB.DocumentClient();

async function CreateCustomer(customer) {

   var params = {
      TableName: "testaurant",
      Item: customer
   }

   await docClient.put(params, function (err, data) {
      if (err) {
         console.log("error - " + JSON.stringify(err, null, 2));
         return false
      }
      else {
         console.log("success - " + JSON.stringify(data, null, 2));
         return true
      }
   })
}

export default CreateCustomer;