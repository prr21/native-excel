import ExcelComponent from '@core/ExcelComponent'

export default class Formula extends ExcelComponent {
  static classes = 'formula excel-panel';

  toHTML(){
    return `
      <div class="formula__ceil"> fx
      </div>
      <div class="formula__input" contenteditable="true" spellcheck="false"> ldasn dlasn dasdn lasdn ;lasd
      </div>
    `
  }
}