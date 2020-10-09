import { $ } from '@core/dom'

export function resizeHandler($root, event) {
  return new Promise(resolve => {
    
    const $resizer = $(event.target)
    const $parent = $resizer.parent('[data-type="resize"]');

    const type = event.target.dataset.resize;
    const fieldIndex = $parent.data[type];
    const coords = $parent.getCoords();

    const sideWay = type === 'col' ? 'bottom' : 'right'
    let value

    $resizer.css({
      opacity: 1,
      [sideWay]: '-5000px'
    })

    document.onmousemove = event => {
      if (type === 'col') {
        const delta = event.clientX - coords.right + 3
        value = coords.width + delta

        if (value > 46) {
          $resizer.css({ 'right': -delta + 'px' })

        } else value = 46

      } else {
        const delta = event.clientY - coords.bottom + 3
        value = coords.height + delta

        if (value > 23) {
          $resizer.css({ 'bottom': -delta + 'px' })

        } else value = 23
      }

    }

    document.onmouseup = () => {
      if (type === 'col') {
        const cells = $root.findAll(`[data-col="${fieldIndex}"]`);
        cells.forEach(e => e.style.width = value + 'px')

      } else $parent.css({ height: value + 'px' })

      $resizer.resetStyle()
      $resizer.css({
        bottom: 0,
        right: 0
      })

      resolve({
        id: fieldIndex,
        type,
        value
      })

      document.onmousemove = null;
    }
  })
}