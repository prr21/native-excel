import ExcelComponent from '@core/ExcelComponent'
import {createTable} from './table.template'
import {resizeHandler} from './table.resize'

export default class Table extends ExcelComponent {
  constructor($root){
    super($root, {
      name: "Table",
      listeners: ['mousedown']
    })
  }

  static classes = 'table';

  onMousedown(event){
    if(event.target.dataset.resize){
      resizeHandler(this.$root, event)
    }
  }

  toHTML(){
    return createTable(30, 20);
  }
}