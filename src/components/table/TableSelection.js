import {$} from '@core/dom'

export default class TableSelection {
  constructor(id){
    this.group = [];
    this.selected = id;
  }

  select(){
    $(`[data-id="${this.selected}"]`)
      .addClass('selected')
  }

  selectGroup(){
    console.log('group')
  }

}