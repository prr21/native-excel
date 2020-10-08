export default class DomListener {
  constructor($component, listeners = []){
    this.$root = $component;
    this.listeners = listeners;
  }
  initDOMListeners(){
    this.listeners.forEach(listener => {
      const method = transformListener(listener);

      if (!this[method]) {
        throw new Error(`Method "${method}" in "${this.name || ''}" has mistake`)
      }
      this[method] = this[method].bind(this);

      this.$root.on(listener, this[method])
    })
  }

  removeDOMListeners(){
    this.listeners.forEach(listener => {
      const method = transformListener(listener);

      this.$root.off(listener, this[method]);
    })
  }
}

// input > onInput
const transformListener = str => 'on'+ str.replace( str[0], str[0].toUpperCase() )