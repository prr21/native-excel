import { $ } from '@core/dom';
import { ActiveRoute } from './ActiveRoute';

export class Route {
  constructor(selector, routes) {
    this.$placeholder = $(selector)
    this.routes = routes
    this.page = null

    this.changePageHandler = this.changePageHandler.bind(this)
    this.init();
  }

  init() {
    window.addEventListener('hashchange', this.changePageHandler)
    this.changePageHandler()
  }

  changePageHandler() {
    if (this.page) {
      this.page.desctroy()
    }

    this.$placeholder.clear()

    const Page = ActiveRoute.path === 'excel'
      ? this.routes.excel
      : this.routes.dashboard

    this.page = new Page();

    this.$placeholder.append(this.page.getRoot())
    this.page.afterRender()
  }

  desctroy() {
    window.removeEventListener('hashchange', this.changePageHandler)
  }
}