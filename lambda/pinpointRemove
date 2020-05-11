import json
import boto3
import decimal
from botocore.exceptions import ClientError
from boto3.dynamodb.conditions import Key, Attr
from boto3.dynamodb.types import TypeDeserializer

def lambda_handler(event, context):
    try: 
        print(event)
        for record in event['Records']:
            #if record['EventSource'] == 'aws:sns':
            message = record['Sns']['Message']
            #convert the string obeject to dict
            message = json.loads(message)
            number = message['originationNumber']
            if message['messageBody'] == 'REMOVE':
                handle_delete(record, number)
    except Exception as e:
        print(f"error {e}")
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }

client = boto3.client("dynamodb", region_name="us-west-2")
deserializer = TypeDeserializer()

def get_customer_id_to_delete(table_name, filter_expr, expr_attr_names, expr_attr_values):
    try:
        response = client.scan(
            TableName=table_name,
            ProjectionExpression="customerID",
            Select="SPECIFIC_ATTRIBUTES",
            FilterExpression=filter_expr,
            ExpressionAttributeNames=expr_attr_names,
            ExpressionAttributeValues=expr_attr_values
        )

        customer_ids = [[deserializer.deserialize(v) for k, v in item.items()][0] for item in response.get("Items")]
    except ClientError as err:
        print(err)
    else:
        print(customer_ids)
        return customer_ids

def delete_record_by_customer_id(table_name, customer_id):
    try:
        response = client.delete_item(
            TableName=table_name,
            Key={
                "customerID": {"S": f"{customer_id}"}
            }
        )
    except ClientError as err:
        print(err)
    else:
        return response

def handle_delete(record, number):
    
    table_name = "testaurant"
    filter_expression = "begins_with(#phone_number, :numberBeginsWith)"

    expression_attribute_names = {
        "#phone_number": "phone_number",
    }

    expression_attribute_values = {
        ":numberBeginsWith": {"S": number},
    }

    id_list = get_customer_id_to_delete(table_name, filter_expression, expression_attribute_names, expression_attribute_values)
    
    for i in id_list:
        delete_record_by_customer_id(table_name, i)
        print(f"Deleting customer {i}")
