import ExcelComponent from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'


export default class Table extends ExcelComponent {
  static classes = 'table';

  toHTML(){
    return createTable(30, 20);
  }
}