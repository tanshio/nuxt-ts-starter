import { stateTodo, TodoType } from './state'

export const todoMutations = {
  appendTodo(todo: TodoType) {
    stateTodo.todoList.push(todo)
  },
}

export default todoMutations
