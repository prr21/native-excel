class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
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