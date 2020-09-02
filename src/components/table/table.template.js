export function createTable(nRows, nCols){
  return [
    generateColumns(nCols),
    generateRows(nRows, nCols)

  ].join('');
}

function generateColumns(count = 20){
  const columns = new Array(count)
      .fill('')
      .map(toChar)
      .map(createCol)
      .join('')
  
  return wrapInRow(columns)
}

function generateRows(x = 30, y = 0){
  let rows = [];

  for (let i = 0; i < x; i++){
    const ceils = new Array(y)
        .fill('')
        .map(createCeil)
        .join('');

    let row = wrapInRow(ceils, i+1)
    rows.push(row)
  }
  return rows.join('');
}

function createCeil(_, colIndex){
  return `<div class="ceil" data-col="${colIndex}" contenteditable="true"></div>`
}

function createCol(title, colIndex){
  return `
    <div class="column" data-col="${colIndex}" data-type="resize">
      ${title} 
      <div class="col-resize" data-resize="col"></div>
    </div>
  `
}

function wrapInRow(elements, index){
  return `
    <div class="row" data-type="resize">

      <div class="row__info">
        <div class="row__info__ceil-info"> ${ index || '' } </div>
        <div class="row-resize" data-resize="row"></div>
      </div>

      <div class="row__data"> 
        ${elements}
      </div>

    </div>`
}

function toChar(_, i){
  const CODES = {
    A: 'A'.charCodeAt(), // 65
    Z: 'Z'.charCodeAt(), // 90
  }
  
  return String.fromCharCode( CODES.A + i )
}
