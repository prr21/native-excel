import DomListener from '@core/DomListener'

export default class ExcelComponent extends DomListener {
  constructor($component, options = {}) {
    super($component, options.listeners)
    this.name = options.name

    this.observer = options.observ
    this.store = options.store
    this.storeSub = null
    this.unsubscribers = []
  }

  prepare() {}

  $emmit(event, ...args) {
    this.observer.dispatch(event, ...args)
  }

  $on(event, fn) {
    const unsub = this.observer.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  $dispatch(action) {
    this.store.dispatch(action)
  }

  $subscribe(fn) {
    this.storeSub = this.store.subscribe(fn)
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
    this.storeSub.unsubscribe()
    this.unsubscribers.forEach(unsub => unsub())
  }
}