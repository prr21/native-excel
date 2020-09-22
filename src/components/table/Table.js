import ExcelComponent from '@core/ExcelComponent'
import TableSelection from './TableSelection'
import {
  $
} from '../../core/dom';
import {
  createTable
} from './table.template'
import {
  resizeHandler
} from './table.resize'
import {
  isCeil,
  isResize,
  matrix
} from './table.functions';

export default class Table extends ExcelComponent {
  static classes = 'table';

  constructor($root) {
    super($root, {
      name: "Table",
      listeners: ['mousedown']
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
    event.preventDefault()

    if (isResize(event)) {
      resizeHandler(this.$root, event)

    } else if (isCeil(event)) {
      const $ceil = $(event.target)

      if (event.ctrlKey) {
        this.selection.selectByOne($ceil)
        return

      } else if (event.shiftKey) {
        const currentGroup = this.selection.group;
        const $currentCeil = currentGroup[currentGroup.length - 1]

        const celectedIds = matrix($currentCeil, $ceil)
          .map(id =>
            this.$root.find(`[data-id="${id}"]`)
          )
        this.selection.selectGroup(celectedIds)
        return
      }

      this.selection.selectOne($ceil)
    }
  }

  toHTML() {
    return createTable(30, 20);
  }
}