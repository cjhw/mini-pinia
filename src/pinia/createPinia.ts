import { App, reactive } from 'vue'
import { Pinia } from './types'
import { patch } from './apis'

export default (): Pinia => {
  const piniaStore: any = {}

  function setSubStore(name: string, store: any): any {
    if (!piniaStore[name]) {
      piniaStore[name] = reactive(store)
      piniaStore[name].$patch = patch
    }

    return piniaStore
  }

  function install(app: App) {
    app.provide('setSubStore', setSubStore)
  }

  return {
    install,
  }
}
