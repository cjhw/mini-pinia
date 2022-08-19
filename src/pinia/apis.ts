export function patch(this: any, value: any) {
  const store = this
  for (let key in value) {
    store[key] = value[key]
  }
}
