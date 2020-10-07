import { $ } from '@core/dom';
import { Observer } from '@core/Observer'

export default class Excel {
  constructor(selector, opt) {
    this.$app = $(selector);
    this.components = opt.components || [];
    this.observer = new Observer()
  }

  getRoot() {
    const $root = $.create('div', 'excel');
    const componentOptions = {
      observ: this.observer
    }

    this.components = this.components.map(Component => {
      let $el = $.create('div', Component.classes);
      const component = new Component($el, componentOptions);

      $el.html(component.toHTML());
      $root.append($el);

      return component
    })
    return $root
  }

  render() {
    this.$app.append(this.getRoot());

    this.components.forEach(component => {
      component.prepare();
      component.init();
    })
  }

  destroy() {
    this.components.forEach(component => {
      component.destroy()
    })
  }

}