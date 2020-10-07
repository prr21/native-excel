import DomListener from '@core/DomListener'

export default class ExcelComponent extends DomListener {
  constructor($component, options = {}) {
    super($component, options.listeners)

    this.observer = options.observ
    this.unsubscribers = []
  }

  prepare() {}

  $dispatch(event, ...args) {
    this.observer.dispatch(event, ...args)
  }

  $on(event, fn) {
    const unsub = this.observer.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach(unsub => unsub())
  }
}