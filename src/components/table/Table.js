import { $ } from '../../core/dom';
import ExcelComponent from '@core/ExcelComponent'
import TableSelection from './TableSelection'
import { createTable } from './table.template'
import { resizeHandler } from './table.resize'
import * as actions from '@/redux/actions'
import { isCeil, isResize, matrix, selectNext } from './table.functions';

export default class Table extends ExcelComponent {
  static classes = 'table';

  constructor($root, options) {
    super($root, {
      name: "Table",
      listeners: ['mousedown', 'keydown', 'input'],
      ...options
    })
  }

  prepare() {
    this.selection = new TableSelection();
  }

  init() {
    super.init();

    const $ceil = this.$root.find('[data-id="0:0"]')
    this.selection.select($ceil)

    this.$on('formula:input', value =>
      this.selection.group.forEach($el => $el.text(value))
    )
    this.$on('formula:enter', () =>
      this.selection.current.onFocus()
    )
  }

  selectedCeil($ceil) {
    this.$emmit('table:select', $ceil)
  }

  async resizeFiled(event) {
    try {
      const data = await resizeHandler(this.$root, event)
      this.$dispatch(actions.tableResize(data))

    } catch (e) {
      console.error(e)
    }
  }

  onInput(event) {
    this.$emmit('table:input', $(event.target))
  }

  onMousedown(event) {
    if (isResize(event)) {
      this.resizeFiled(event)

    } else if (isCeil(event)) {
      const $ceil = $(event.target)

      this.selectedCeil($ceil)
      this.selectedWith(event, $ceil)
    }
  }

  onKeydown(event) {
    const KEYS = [
      'Tab',
      'Enter',
      'ArrowUp',
      'ArrowRight',
      'ArrowDown',
      'ArrowLeft'
    ]
    let key = event.key

    if (KEYS.includes(key) && (!event.shiftKey || key !== 'Enter')) {
      event.preventDefault()

      const id = this.selection.current.id(true)
      const $nextCeil = this.$root.find(selectNext(key, id))

      this.selectedCeil($nextCeil)
      this.selectedWith(event, $nextCeil)
    }
  }

  selectedWith(event, $ceil) {
    if ($ceil.$el !== document.activeElement) {
      event.preventDefault()
    }
    if (event.ctrlKey) {
      this.selection.selectByOne($ceil)
      return

    } else if (event.shiftKey) {
      const celectedIds = matrix(this.selection.group[0], $ceil)
        .map(id =>
          this.$root.find(`[data-id="${id}"]`)
        )
      this.selection.selectGroup(celectedIds)
      return
    }

    this.selection.selectOne($ceil)
  }

  toHTML() {
    return createTable(30, 20);
  }
}