import * as dynamoDbLib from '../libs/dynamodb-lib'
import Response from '../libs/response-lib'
import { ListTodoParams } from '../types/params'

export async function list (event, context) {
  const params: ListTodoParams = {
    TableName: process.env.DYNAMODB_TABLE,
    KeyConditionExpression: 'userId = :userId',
    ExpressionAttributeValues: {
      ':userId': event.requestContext.identity.cognitoIdentityId
    }
  }

  try {
    const result = await dynamoDbLib.call('query', params)
    return Response.success(result)
  } catch (e) {
    return Response.failure({ status: false })
  }
}
