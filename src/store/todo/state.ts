import Vue from 'vue'

export type TodoType = {
  id: number
  title: string
  content: string
}

export type TodoListType = {
  todoList: TodoType[]
}

export const stateTodo = Vue.observable<TodoListType>({
  todoList: [
    {
      id: 1,
      title: 'test',
      content: 'content',
    },
  ],
})

export const state = (): void => {}
export default state
