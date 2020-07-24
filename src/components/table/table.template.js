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

function createCeil(){
  return `<div class="ceil" contenteditable="true"></div>`
}

function createCol(title){
  return `<div class="ceil-column"> ${title} </div>`
}

function wrapInRow(elements, index){
  return `
    <div class="row">

      <div class="row__info">
        <div class="row__info__ceil-info"> ${ index || '' } </div>
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
