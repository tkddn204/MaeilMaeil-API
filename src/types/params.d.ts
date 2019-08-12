import { TodoKey, TodoModel } from './models'

interface Params {
  /**
   * default params interface
   *
   * @type {string}
   * @memberof Params
   */
  TableName: string
}
interface KeyParams extends Params {
  Key: TodoKey
}
interface ExpressionParams extends Params {
  ExpressionAttributeValues: object
}

export interface CreateTodoParams extends Params {
  Item: TodoModel
}
export interface GetTodoParams extends KeyParams {}
export interface ListTodoParams extends Params, ExpressionParams {
  KeyConditionExpression: string
}
export interface UpdateTodoParams extends KeyParams, ExpressionParams {
  UpdateExpression: string
  ReturnValues: string
}
