import {$} from '@core/dom';

export default class Excel {
  constructor(selector, opt){
    this.$app = $(selector);
    this.components = opt.components || [];
  }

  getRoot(){
    let $root = $.create('div', 'excel');

    this.components = this.components.map(Component => {
      let $el = $.create('div', Component.classes);
      const component = new Component($el);

      $el.html(component.toHTML());
      $root.append($el);

      return component
    })
    return $root
  }

  render(){
    this.$app.append( this.getRoot() );

    this.components.forEach(component => {
      component.prepare();
      component.init();
    })
  }

}