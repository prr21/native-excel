import ExcelComponent from '@core/ExcelComponent'

export default class Header extends ExcelComponent {
  static classes = 'header excel-panel';

  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options
    })

  }

  toHTML() {
    return `
      <div class="header__icon">
        <i class="material-icons">description</i>
      </div>
      <div class="header__title edit-div" contenteditable="true">
          Новая таблица
      </div>
    `
  }
}