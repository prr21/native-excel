import DomListener from '@core/DomListener'

export default class ExcelComponent extends DomListener {
  constructor($component, options = {}){
    super($component, options.listeners)
  }

  prepare(){}

  init(){
    this.initDOMListeners();
  }

  destroy(){
    this.removeDOMListeners();
  }
}