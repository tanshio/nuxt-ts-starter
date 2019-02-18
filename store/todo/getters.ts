import { TodoStateInterface } from './state'

export interface TodoGettersInterface extends TodoStateInterface {
}

export default {
  counter (state): TodoGettersInterface['counter'] {
    return state.counter
  }
}
