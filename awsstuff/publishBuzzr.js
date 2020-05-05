'use strict';
var AWS = require("aws-sdk");
var sns = new AWS.SNS();

exports.handler = (event, context, callback) => {

    event.Records.forEach((record) => {
        console.log('Stream record: ', JSON.stringify(record, null, 2));

        if (record.eventName == 'INSERT') {
            var name = JSON.stringify(record.restaurants.waitlist.id1.name);
            var number = JSON.stringify(record.restaurants.waitlist.id1.phone_number);
            var party = JSON.stringify(record.restaurants.waitlist.id1.party_size);
            var params = {
                Subject: 'You are checked in to Buzzr ' + name,
                Message: 'Buzzr user ' + name + ' with phone number ' + number + 'and party size' + party + '.\n\n ',
                TopicArn: 'arn:aws:sns:us-west-2:5383-0564-3618:Buzzr'
            };
            sns.publish(params, function(err, data) {
                if (err) {
                    console.error("Unable to send message. Error JSON:", JSON.stringify(err, null, 2));
                } else {
                    console.log("Results from sending message: ", JSON.stringify(data, null, 2));
                }
            });
        }
    });
    callback(null, `Successfully processed.`);
};
