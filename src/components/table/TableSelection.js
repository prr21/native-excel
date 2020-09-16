export default class TableSelection {
  static className = 'selected'

  constructor(){
    this.group = [];
  }

  selectOne($el){
    this.unselectAll()
    this.select($el)
  }

  selectByOne($el){
    if ( $el.has(TableSelection.className) ){
      this.unselect($el)

      if (document.activeElement == $el.$el){
        this.offFocus($el)
        
        let $prevEl = this.group[this.group.length-1];
        if ($prevEl) this.onFocus($prevEl)
      }
      
    } else {
      this.select($el)
    }
  }

  selectGroup($el){
    if (this.group.length === 0){
      return this.select($el)
    }

    console.log(this.group[this.group.length-1].id)
    console.log($el.id)
  }

  select($el){
    this.group.push($el)
    this.onFocus($el)

    $el.addClass(TableSelection.className)
  }

  unselect($el){
    $el.removeClass(TableSelection.className)
    this.removeFromGroup($el.id)
  }

  unselectAll(){
    this.group.forEach($el => $el.removeClass(TableSelection.className))
    this.group = []
  }

  onFocus($el){
    $el.$el.focus()
  }

  offFocus($el){
    $el.$el.blur()
  }

  removeFromGroup(removableId){
    this.group = this.group
        .filter($el => 
          $el.id !== removableId
        )
  }

}