export function isResize(e) {
  if (e.target.dataset.resize) {
    return true
  }
}
export function isCeil(e) {
  if (e.target.dataset.id) {
    return true
  }
}

export function matrix($curent, $target) {

  let start = $curent.id(true)
  let end = $target.id(true)


  let rows = range(start.row, end.row)
  let cols = range(start.col, end.col)

  return cols.reduce((acc, col) => {
    rows.forEach(row => acc.push(`${row}:${col}`))

    return acc
  }, [])
}

function range(start, end) {
  if (start > end) {
    [start, end] = [end, start]
  }
  return new Array(end - start + 1)
    .fill('')
    .map((_, i) => +start + i)
}