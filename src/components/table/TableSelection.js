export default class TableSelection {
  static className = 'selected'

  constructor() {
    this.group = [];
  }

  selectOne($el) {
    this.unselectAll()
    this.select($el)
  }

  selectByOne($el) {
    if ($el.has(TableSelection.className)) {
      this.unselect($el)

      if (document.activeElement == $el.$el) {
        this.offFocus($el)
        this.group[0] ? this.group[0].onFocus() : null // сделать автофокус на последний эл
      }

    } else {
      this.select($el)
    }
  }

  selectGroup(arr) {
    this.unselectAll()
    arr.forEach(a => this.select(a))
  }

  select($el) {
    this.group.push($el)
    $el.onFocus()

    $el.addClass(TableSelection.className)
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