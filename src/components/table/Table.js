import ExcelComponent from '@core/ExcelComponent'

export default class Table extends ExcelComponent {
  static classes = 'table';

  toHTML(){
    return `
      <div class="row">
        <div class="row__info">
        </div>
        <div class="row__data">
          <div class="ceil-column"> A
          </div>
          <div class="ceil-column selected"> B
          </div>
          <div class="ceil-column"> C
          </div>
          <div class="ceil-column"> D
          </div>
          <div class="ceil-column"> E
          </div>
          <div class="ceil-column selected"> B
          </div>
          <div class="ceil-column"> C
          </div>
          <div class="ceil-column"> D
          </div>
          <div class="ceil-column"> A
          </div>
          <div class="ceil-column selected"> B
          </div>
          <div class="ceil-column"> C
          </div>
          <div class="ceil-column"> D
          </div>
          <div class="ceil-column"> A
          </div>
          <div class="ceil-column selected"> B
          </div>
          <div class="ceil-column"> C
          </div>
          <div class="ceil-column"> D
          </div>
        </div>
      </div>

      <div class="row">
        <div class="row__info">
          <div class="row__info__ceil-info"> 1</div>
        </div>

        <div class="row__data">
          <div class="ceil" contenteditable="true">
            A1
          </div>
          <div class="ceil" contenteditable="true">
            B2
          </div>
          <div class="ceil" contenteditable="true">
            C3
          </div>
          <div class="ceil" contenteditable="true">
            D4
          </div>
        </div>
        <div class="row__data">
          <div class="ceil" contenteditable="true">
            A1
          </div>
          <div class="ceil" contenteditable="true">
            B2
          </div>
          <div class="ceil" contenteditable="true">
            C3
          </div>
          <div class="ceil" contenteditable="true">
            D4
          </div>
        </div>
        <div class="row__data">
          <div class="ceil" contenteditable="true">
            A1
          </div>
          <div class="ceil" contenteditable="true">
            B2
          </div>
          <div class="ceil" contenteditable="true">
            C3
          </div>
          <div class="ceil" contenteditable="true">
            D4
          </div>
        </div>
        <div class="row__data">
          <div class="ceil" contenteditable="true">
            A1
          </div>
          <div class="ceil" contenteditable="true">
            B2
          </div>
          <div class="ceil" contenteditable="true">
            C3
          </div>
          <div class="ceil" contenteditable="true">
            D4
          </div>
        </div>
      </div>
      <div class="row">
        <div class="row__info">
          <div class="row__info__ceil-info"> 1</div>
        </div>

        <div class="row__data">
          <div class="ceil" contenteditable="true">
            A1
          </div>
          <div class="ceil" contenteditable="true">
            B2
          </div>
          <div class="ceil" contenteditable="true">
            C3
          </div>
          <div class="ceil" contenteditable="true">
            D4
          </div>
        </div>
        <div class="row__data">
          <div class="ceil" contenteditable="true">
            A1
          </div>
          <div class="ceil" contenteditable="true">
            B2
          </div>
          <div class="ceil" contenteditable="true">
            C3
          </div>
          <div class="ceil" contenteditable="true">
            D4
          </div>
        </div>
        <div class="row__data">
          <div class="ceil" contenteditable="true">
            A1
          </div>
          <div class="ceil" contenteditable="true">
            B2
          </div>
          <div class="ceil" contenteditable="true">
            C3
          </div>
          <div class="ceil" contenteditable="true">
            D4
          </div>
        </div>
        <div class="row__data">
          <div class="ceil" contenteditable="true">
            A1
          </div>
          <div class="ceil" contenteditable="true">
            B2
          </div>
          <div class="ceil" contenteditable="true">
            C3
          </div>
          <div class="ceil" contenteditable="true">
            D4
          </div>
        </div>
      </div>
      <div class="row">
        <div class="row__info">
          <div class="row__info__ceil-info"> 1</div>
        </div>

        <div class="row__data">
          <div class="ceil" contenteditable="true">
            A1
          </div>
          <div class="ceil" contenteditable="true">
            B2
          </div>
          <div class="ceil" contenteditable="true">
            C3
          </div>
          <div class="ceil" contenteditable="true">
            D4
          </div>
        </div>
        <div class="row__data">
          <div class="ceil" contenteditable="true">
            A1
          </div>
          <div class="ceil" contenteditable="true">
            B2
          </div>
          <div class="ceil" contenteditable="true">
            C3
          </div>
          <div class="ceil" contenteditable="true">
            D4
          </div>
        </div>
        <div class="row__data">
          <div class="ceil" contenteditable="true">
            A1
          </div>
          <div class="ceil" contenteditable="true">
            B2
          </div>
          <div class="ceil" contenteditable="true">
            C3
          </div>
          <div class="ceil" contenteditable="true">
            D4
          </div>
        </div>
        <div class="row__data">
          <div class="ceil" contenteditable="true">
            A1
          </div>
          <div class="ceil" contenteditable="true">
            B2
          </div>
          <div class="ceil" contenteditable="true">
            C3
          </div>
          <div class="ceil" contenteditable="true">
            D4
          </div>
        </div>
      </div>
      <div class="row">
        <div class="row__info">
          <div class="row__info__ceil-info"> 1</div>
        </div>

        <div class="row__data">
          <div class="ceil" contenteditable="true">
            A1
          </div>
          <div class="ceil" contenteditable="true">
            B2
          </div>
          <div class="ceil" contenteditable="true">
            C3
          </div>
          <div class="ceil" contenteditable="true">
            D4
          </div>
        </div>
        <div class="row__data">
          <div class="ceil" contenteditable="true">
            A1
          </div>
          <div class="ceil" contenteditable="true">
            B2
          </div>
          <div class="ceil" contenteditable="true">
            C3
          </div>
          <div class="ceil" contenteditable="true">
            D4
          </div>
        </div>
        <div class="row__data">
          <div class="ceil" contenteditable="true">
            A1
          </div>
          <div class="ceil" contenteditable="true">
            B2
          </div>
          <div class="ceil" contenteditable="true">
            C3
          </div>
          <div class="ceil" contenteditable="true">
            D4
          </div>
        </div>
        <div class="row__data">
          <div class="ceil" contenteditable="true">
            A1
          </div>
          <div class="ceil" contenteditable="true">
            B2
          </div>
          <div class="ceil" contenteditable="true">
            C3
          </div>
          <div class="ceil" contenteditable="true">
            D4
          </div>
        </div>
      </div>
    `
  }
}