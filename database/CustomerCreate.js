import React from 'react';

import AWS from '../AWS.config';

// get current time
let dObj = new Date();
var curTime = (dObj.getHours() + ':' 
            + dObj.getMinutes() + ':' 
            + dObj.getSeconds());

let docClient = new AWS.DynamoDB.DocumentClient();
let CreateCustomer = function (customer) {

   var params = {
      TableName: "buzzr",
      Item: customer
   }

   docClient.put(params, function (err, data) {
      if (err) {
         console.log("error - " + JSON.stringify(err, null, 2));
      }
      else {
         console.log("success - " + JSON.stringify(data, null, 2));
      }
   })
}

export default CreateCustomer();