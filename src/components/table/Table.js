import ExcelComponent from '@core/ExcelComponent'
import TableSelection from './TableSelection'
import {createTable} from './table.template'
import {resizeHandler} from './table.resize'

export default class Table extends ExcelComponent {
  static classes = 'table';

  constructor($root){
    super($root, {
      name: "Table",
      listeners: ['mousedown']
    })
  }

  prepare(){
    const initialSelect = new TableSelection('0:0');
    initialSelect.select()
  }

  onMousedown(event){
    if(event.target.dataset.resize){
      resizeHandler(this.$root, event)
    }
  }

  toHTML(){
    return createTable(30, 20);
  }
}