export interface TodoMutationInterface {
  add: (num: number) => {}
}

export default {
  add(state, num = 1) {
    state.counter = state.counter + num
  },
}
