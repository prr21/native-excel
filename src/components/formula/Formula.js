import ExcelComponent from '@core/ExcelComponent'

export default class Formula extends ExcelComponent {
  constructor($root){
    super($root, {
      name: 'Formula',
      listeners: ['input']
    })
  }
  
  static classes = 'formula excel-panel';

  onInput(event){
    console.log(event.target.textContent.trim())
  }

  toHTML(){
    return `
      <div class="formula__ceil"> fx
      </div>
      <div class="formula__input" contenteditable="true" spellcheck="false"> ldasn dlasn dasdn lasdn ;lasd
      </div>
    `
  }

}