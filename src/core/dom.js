class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string' ?
      document.querySelector(selector) :
      selector
  }

  get data() {
    return this.$el.dataset
  }

  id(parse) {
    if (parse) {
      let parsed = this.id().split(':')
      return {
        row: +parsed[0],
        col: +parsed[1]
      }
    }
    return this.data.id
  }

  html(str) {
    if (typeof str === 'string') {
      this.$el.innerHTML = str;
      return this;
    }
    return this.$el.outerHTML.trim()
  }

  clear(){
    this.$el.innerHTML = '';
    return this
  }

  text(str) {
    if (str !== undefined) {
      this.$el.textContent = str.trim()
      return this
    }
    return this.$el.textContent.trim()
  }

  on(event, callback) {
    this.$el.addEventListener(event, callback)
  }

  off(event, callback) {
    this.$el.removeEventListener(event, callback)
  }

  parent(elem) {
    return $(this.$el.closest(elem));
  }

  getCoords() {
    return this.$el.getBoundingClientRect();
  }

  find(selector) {
    return $(this.$el.querySelector(selector))
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector)
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }
    this.$el.append(node);

    return this;
  }

  css(styles = {}) {
    Object
      .keys(styles)
      .forEach(
        key => this.$el.style[key] = styles[key]
      )
  }

  resetStyle() {
    return this.$el.style = ''
  }

  addClass(className) {
    return this.$el.classList.add(className)
  }

  removeClass(className) {
    return this.$el.classList.remove(className)
  }

  has(className) {
    return [...this.$el.classList].includes(className)
  }

  onFocus() {
    this.$el.focus()
    return this
  }

  offFocus() {
    this.$el.blur()
    return this
  }

}

export function $(el) {
  return new Dom(el);
}

$.create = (elName, classes) => {
  let $node = document.createElement(elName);

  if (classes) {
    $node.className = classes;
  }
  return $($node);
}