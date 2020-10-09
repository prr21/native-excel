import Excel from '@/components/excel/Excel';
import Header from '@/components/header/Header';
import Toolbar from '@/components/toolbar/Toolbar';
import Formula from '@/components/formula/Formula';
import Table from '@/components/table/Table';

import { storage } from '@/core/utils'
import { createStore } from '@core/createStore'
import { initialState } from '@/redux/initialState'
import { rootReducer } from '@/redux/rootReducer'
import './sass/index.sass';

const store = createStore(rootReducer, initialState)

store.subscribe(state => storage('excel-state', state))

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
  store
})

excel.render();