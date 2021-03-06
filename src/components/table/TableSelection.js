export default class TableSelection {
  static className = 'selected'

  constructor() {
    this.group = []
    this.current = null
  }

  selectOne($el) {
    this.unselectAll()
    this.select($el)
  }

  selectByOne($el) {
    if ($el.has(TableSelection.className)) {
      this.unselect($el)

    } else {
      this.select($el)
    }
  }

  selectGroup(arr) {
    this.unselectAll()
    arr.forEach(this.select)
  }

  select = ($el) => {
    this.group.push($el)
    $el.onFocus()

    $el.addClass(TableSelection.className)
    this.current = $el
  }

  unselect($el) {
    $el.removeClass(TableSelection.className)
    this.removeUnselected()
  }

  unselectAll() {
    this.group.forEach($el => $el.removeClass(TableSelection.className))
    this.group = []
  }

  removeUnselected() {
    this.group = this.group
      .filter($el => $el.has(TableSelection.className))
  }

}