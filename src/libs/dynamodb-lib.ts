import { DocumentClient } from 'aws-sdk/clients/dynamodb'

export function call (action, params) {
  const dynamoDb = new DocumentClient()
  return dynamoDb[action](params).promise()
}
