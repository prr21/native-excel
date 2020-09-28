import ExcelComponent from '@core/ExcelComponent'
import TableSelection from './TableSelection'
import { $ } from '../../core/dom';
import { createTable } from './table.template'
import { resizeHandler } from './table.resize'
import { isCeil, isResize, matrix, selectNext } from './table.functions';

export default class Table extends ExcelComponent {
  static classes = 'table';

  constructor($root) {
    super($root, {
      name: "Table",
      listeners: ['mousedown', 'keydown']
    })
  }

  prepare() {
    this.selection = new TableSelection();
  }

  init() {
    super.init();

    const initialCeil = '[data-id="0:0"]'
    const $ceil = this.$root.find(initialCeil)

    this.selection.select($ceil)
    $ceil.onFocus()
  }

  onMousedown(event) {
    if (isResize(event)) {
      resizeHandler(this.$root, event)

    } else if (isCeil(event)) {
      const $ceil = $(event.target)

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

    if (KEYS.includes(key) && (!event.shiftKey || key !== 'Enter' )) {
      event.preventDefault()

      const id = this.selection.current.id(true)
      const $nextCeil = this.$root.find(selectNext(key, id))

      this.selectedWith(event, $nextCeil)
    }
  }

  selectedWith(event, $ceil) {
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