import {$} from '@core/dom'

export function resizeHandler($root, event){
  
  const $resizer = $(event.target)
  const $parent = $resizer.parent('[data-type="resize"]');
  
  const action = event.target.dataset.resize;
  const colIndex = $parent.data.col;
  const coords = $parent.getCoords();

  const sideWay = action === 'col' ? 'bottom' : 'right'
  let value, delta

  $resizer.css({
    opacity: 1,
    [sideWay]: '-5000px'
  })

  document.onmousemove = event => {
    if (action === 'col'){
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
    if (action === 'col'){
      const cells = $root.findAll(`[data-col="${colIndex}"]`);
      cells.forEach(e => e.style.width = value + 'px')

    } else $parent.css({ height: value + 'px'})
    
    $resizer.css({
      opacity: 0,
      bottom: 0,
      right: 0
    })

    document.onmousemove = null;
  }
}