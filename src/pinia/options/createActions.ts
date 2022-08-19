export function createActios(store: any, actions: { [key: string]: any }) {
  for (let method in actions) {
    store[method] = actions[method]
  }
}
