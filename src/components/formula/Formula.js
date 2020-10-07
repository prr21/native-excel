import ExcelComponent from '@core/ExcelComponent'

export default class Formula extends ExcelComponent {
  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      ...options
    })
  }

  static classes = 'formula excel-panel';

  init() {
    super.init();

    this.$formula = this.$root.find('#formula')

    this.$on('table:input', $el =>
      this.$formula.text($el.text())
      )
      this.$on('table:select', $el =>
      this.$formula.text($el.text())
    )
  }

  onInput(event) {
    let value = event.target.textContent.trim()
    this.$dispatch('formula:input', value)
  }

  onKeydown(event) {
    if (event.key !== 'Enter') {
      return
    }

    event.preventDefault()
    event.target.textContent = ''

    this.$dispatch('formula:enter')
  }

  toHTML() {
    return `
      <div class="formula__ceil"> fx
      </div>
      <div id="formula" class="formula__input" contenteditable="true" spellcheck="false">
      </div>
    `
  }

}