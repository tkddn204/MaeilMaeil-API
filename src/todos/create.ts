import * as uuid from 'uuid'
import * as dynamoDbLib from '../libs/dynamodb-lib'
import Response from '../libs/response-lib'
import { CreateTodoParams } from '../types/params'

export async function create (event, context) {
  const data = JSON.parse(event.body)
  const params: CreateTodoParams = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      todoId: uuid.v1(),
      title: data.title,
      content: data.content,
      createdAt: new Date().toISOString(),
      modifiedAt: new Date().toISOString()
    }
  }

  try {
    await dynamoDbLib.call('put', params)
    return Response.success(params.Item)
  } catch (e) {
    return Response.failure({ status: false })
  }
}
