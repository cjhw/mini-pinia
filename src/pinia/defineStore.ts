import { inject, reactive } from 'vue'
import { StateTree } from './types'
import { createGetters, createState } from './options'
import { createActios } from './options'

export default (
  name: string,
  {
    state,
    getters,
    actions,
  }: {
    state?: () => StateTree
    getters?: { [key: string]: any }
    actions?: { [key: string]: any }
  }
) => {
  const store: any = {}

  state && typeof state === 'function' && createState(store, state)

  actions && Object.keys(actions).length > 0 && createActios(store, actions)

  getters && Object.keys(getters).length > 0 && createGetters(store, getters)

  return () => {
    const setSubStore: any = inject('setSubStore')
    const piniaStore = setSubStore(name, reactive(store))
    return piniaStore[name]
  }
}
