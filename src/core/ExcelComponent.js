import DomListener from '@core/DomListener'

export default class ExcelComponent extends DomListener {
  constructor($component, options = {}){
    super($component, options.listeners)
  }

  init(){
    this.initDOMListeners();
  }

  destroy(){
    this.removeDOMListeners();
  }
}