import * as dynamoDbLib from '../libs/dynamodb-lib'
import Response from '../libs/response-lib'
import { GetTodoParams } from '../types/params'

export default async function get (event, context) {
  const params: GetTodoParams = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      todoId: event.pathParameters.id
    }
  }

  try {
    const result = await dynamoDbLib.call('get', params)
    if (result.Item) {
      return Response.success(result.Item)
    } else {
      return Response.failure({ status: false, error: 'Item not found.' })
    }
  } catch (e) {
    return Response.failure({ status: false })
  }
}
