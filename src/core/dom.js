class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }

  get data(){
    return this.$el.dataset
  }

  html(str){
    if (typeof str === 'string'){
      this.$el.innerHTML = str;
      return this;
    }
    return this.$el.outerHTML.trim()
  }

  on(event, callback){
    this.$el.addEventListener(event, callback)
  }

  off(event, callback){
    this.$el.removeEventListener(event, callback)
  }

  parent(elem){
    return $( this.$el.closest(elem) );
  }

  getCoords(){
    return this.$el.getBoundingClientRect();
  }

  findAll(selector){
    return this.$el.querySelectorAll(selector)
  }

  css(styles = {}){
    Object
      .keys(styles)
      .forEach(
        key => this.$el.style[key] = styles[key]
      )
  }

  append(node){
    if(node instanceof Dom){
      node = node.$el;
    }
    this.$el.append(node);

    return this;
  }
}

export function $(el){
  return new Dom(el);
}

$.create = (elName, classes) => {
  let $node = document.createElement(elName);
  
  if(classes){
    $node.className = classes;
  }
  return $($node);
}