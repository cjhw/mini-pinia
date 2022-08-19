export declare type StateTree = Record<string | number | symbol, any>

export declare interface Pinia {
  install?: (app: App) => void
}
