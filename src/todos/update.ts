import * as dynamoDbLib from '../libs/dynamodb-lib'
import Response from '../libs/response-lib'
import { UpdateTodoParams } from '../types/params'

export async function update (event, context) {
  const data = JSON.parse(event.body)
  const params: UpdateTodoParams = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      todoId: event.pathParameters.id
    },
    UpdateExpression: 'SET title = :title, content = :content',
    ExpressionAttributeValues: {
      ':title': data.title || null,
      ':content': data.content || null
    },
    ReturnValues: 'ALL_NEW'
  }

  try {
    await dynamoDbLib.call('update', params)
    return Response.success({ status: true })
  } catch (e) {
    return Response.failure({ status: false })
  }
}
