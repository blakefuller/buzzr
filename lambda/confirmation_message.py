import json
import boto3
import datetime
from botocore.exceptions import ClientError

table_name = "testaurant"

def lambda_handler(event, context):
    # TODO implement
    try:
        print(event)
        for record in event['Records']:
            if record['eventName'] == 'INSERT':
                handle_insert(record)
    except Exception as e:
        print(f"error {e}")

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
def handle_insert(record):
    client = boto3.client('dynamodb')
    record['dynamodb']
    print(record)
    region = "us-west-2"
    originationNumber = "+12057408060"
    destinationNumber = record['dynamodb']['NewImage']['phone_number']['S']

    inputPartySize = record['dynamodb']['NewImage']['party_size']['N']
    inputPartySize =int(inputPartySize)

    #get party sizes according the the wait_time list
    if inputPartySize == 3:
        waitlistPartySize = '4'
    elif inputPartySize == 5:
        waitlistPartySize = '6'
    elif inputPartySize > 6:
        waitlistPartySize = '8+'
    else:
        waitlistPartySize = str(inputPartySize)

    #call the table
    waitTimeList = client.get_item(
        TableName = table_name,
        Key = {'customerID': {'S': 'wait_times'}}
    )
    print(waitTimeList)

    #grab the waitime based on the partysize
    waitTime = waitTimeList['Item'][waitlistPartySize]['N']

    message = (f"Welcome to {table_name}. You have been added to the waitlist, your current wait time is {waitTime} minutes. Text CANCEL to be removed from the waitlist.")
    applicationId = "eeed9511a8214dbba5c0f0d5762d3fc6"
    messageType = "TRANSACTIONAL"

    client = boto3.client('pinpoint',region_name=region)
    try:
        response = client.send_messages(
            ApplicationId=applicationId,
            MessageRequest={
                'Addresses': {
                    destinationNumber: {
                        'ChannelType': 'SMS'
                    }
                },
                'MessageConfiguration': {
                    'SMSMessage': {
                        'Body': message,
                        'MessageType': messageType,
                        'OriginationNumber': originationNumber
                    }
                }
            }
        )

    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        name = record['dynamodb']['NewImage']['name']['S']
        customerID = record['dynamodb']['NewImage']['customerID']['S']
        currentTime = datetime.datetime.now()
        client = boto3.client('dynamodb')
        waitTimeList = client.update_item(
           TableName = 'testaurant',
           Key = {'customerID': {'S': 'logs'}},
           UpdateExpression = "SET #l = list_append(#l, :vals)",
           ExpressionAttributeNames = {"#l": "logs"},
           ExpressionAttributeValues = {
              ":vals": {
                 "L": [
                    {
                        "M": {
                            "timestamp": {
                                "S": str(currentTime)
                            },
                            "message": {
                                "S": f"{name} ({customerID}) was added"
                            }
                        }
                    }
                 ]
              }
           }
        )
        print("Message sent! Message ID: "
                + response['MessageResponse']['Result'][destinationNumber]['MessageId'])
