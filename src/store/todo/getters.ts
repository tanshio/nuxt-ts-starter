import { stateTodo } from './state'

const todoGetters = {
  todoLList() {
    return stateTodo.todoList
  },
}

export default todoGetters
