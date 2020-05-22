import json
import boto3
from botocore.exceptions import ClientError

def lambda_handler(event, context):
    # TODO implement
    try: 
        print(event)
        for record in event['Records']:
            if record['eventName'] == 'MODIFY':
                if 'notified_time' in record['dynamodb']['NewImage']:
                    if 'notified_time' not in record['dynamodb']['OldImage']:
                        send_notify(record)
    except Exception as e:
        print(f"error {e}")
        
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
    
def send_notify(record):
    record['dynamodb']
    print(record)
    region = "us-west-2"
    originationNumber = "+12057408060"
    destinationNumber = record['dynamodb']['NewImage']['phone_number']['S']
    message = ("Your table is ready! Please see the host for seating")
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
        print("Message sent! Message ID: "
                + response['MessageResponse']['Result'][destinationNumber]['MessageId'])