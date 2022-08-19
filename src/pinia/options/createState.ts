import { reactive, toRef } from 'vue'
import { StateTree } from '../types'

export function createState(store: any, state: () => StateTree) {
  const _state: StateTree = state()
  store.$state = reactive(_state)

  for (let key in _state) {
    store[key] = toRef(store.$state, key)
  }
}
