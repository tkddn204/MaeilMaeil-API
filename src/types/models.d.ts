export interface TodoKey {
  userId: string
  todoId: string
}

export interface TodoModel extends TodoKey {
  title: string
  content?: string
  createdAt: string
  modifiedAt: string
}
