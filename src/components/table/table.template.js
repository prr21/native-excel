import { storage } from '@/core/utils'
const state = storage('excel-state') || {}

export function createTable(nRows, nCols) {
  return [
    generateColumns(nCols),
    generateRows(nRows, nCols)

  ].join('');
}

function generateColumns(count = 20) {
  const columns = new Array(count)
    .fill('')
    .map(toChar)
    .map(createCol)
    .join('')

  return wrapInRow(columns)
}

function generateRows(x = 30, y = 0) {
  let rows = [];

  for (let rowInd = 0; rowInd < x; rowInd++) {
    const ceils = new Array(y)
      .fill('')
      .map(createCeil(rowInd))
      .join('');

    const rowDiv = wrapInRow(ceils, rowInd + 1)
    rows.push(rowDiv)
  }
  return rows.join('');
}

function createCeil(rowIndex) {
  return (_, colIndex) => {
    const styleSize = initialSize('width', colIndex)

    return `
      <div 
        class="ceil" 
        data-col="${colIndex}" 
        data-id="${rowIndex}:${colIndex}"
        contenteditable
        ${styleSize}
      >
      </div>`
  }
}

function createCol(title, index) {
  const styleSize = initialSize('width', index)
  return `
    <div 
      class="column" 
      data-col="${index}" data-type="resize" ${styleSize}
    >
      ${title} 
      <div class="col-resize" data-resize="col"></div>
    </div>
  `
}

function wrapInRow(elements, index) {
  const styleSize = initialSize('height', index)

  return `
    <div 
      class="row" 
      data-type="resize" 
      data-row="${index}"
      ${styleSize}
    >

      <div class="row__info">
        <div class="row__info__ceil-info"> ${ index || '' } </div>
        <div class="row-resize" data-resize="row"></div>
      </div>

      <div class="row__data"> 
        ${elements}
      </div>

    </div>`
}

function toChar(_, i) {
  const CODES = {
    A: 'A'.charCodeAt(), // 65
    Z: 'Z'.charCodeAt(), // 90
  }

  return String.fromCharCode(CODES.A + i)
}

function initialSize(axis, index = 0) {
  const objName = axis === 'width' ? 'colState' : 'rowState'

  const fieldState = state[objName] || {}
  const keys = Object.keys(fieldState)

  index = index.toString()

  if (keys.includes(index)) {
    return `style="${axis}:${fieldState[index]}px"`
  }
  return ''
}