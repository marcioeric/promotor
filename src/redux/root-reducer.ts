import { combineReducers } from 'redux'

import pointReducer from './point/point.reducer'
import saleReducer from './sale/sale.reducer'

export default combineReducers({
    point: pointReducer,
    sale: saleReducer
})