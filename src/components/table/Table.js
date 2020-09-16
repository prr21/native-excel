import ExcelComponent from '@core/ExcelComponent'
import { $ } from '../../core/dom';
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
    this.selection = new TableSelection();
  }

  init(){
    super.init();

    let initialCeil = '[data-id="0:0"]'

    const $ceil = this.$root.find(initialCeil)
    $ceil.id = '0:0'

    this.selection.select($ceil)
    this.selection.onFocus($ceil)
  }

  onMousedown(event){
    let dataset = event.target.dataset;
    event.preventDefault()

    if (dataset.resize){
      resizeHandler(this.$root, event)

    } else if (dataset.id){
      const $ceil = $(event.target);
      $ceil.id = dataset.id

      if (event.ctrlKey){
        this.selection.selectByOne($ceil)
        return

      } else if (event.shiftKey){
        this.selection.selectGroup($ceil)
        return
      }
      
      this.selection.selectOne($ceil)
    }
  }

  toHTML(){
    return createTable(30, 20);
  }
}