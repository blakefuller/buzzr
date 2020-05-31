import json
import boto3
import datetime
from botocore.exceptions import ClientError

table_name = "testaurant"

def lambda_handler(event, context):
    try:
        print(event)
        for record in event['Records']:
            if record['eventName'] == 'REMOVE':
                handle_remove(record)
    except Exception as e:
        print(f"error {e}")

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
def handle_remove(record):
    name = record['dynamodb']['OldImage']['name']['S']
    customerID = record['dynamodb']['OldImage']['customerID']['S']
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
                            "S": f"{name} ({customerID}) was removed"
                        }
                    }
                }
             ]
          }
       }
    )
