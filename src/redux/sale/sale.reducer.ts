import { SaleActionTypes, SaleType }  from './sale.types'

interface ActionType {
    type: string
    payload: SaleType
}

const INITIAL_STATE = {
    currentSale: {}
}

const saleReducer = (state = INITIAL_STATE, action: ActionType) => {
    switch (action.type) {
        case SaleActionTypes.SET_CURRENT_SALE:
            return {
                ...state,
                currentSale: action.payload
            }
            
        default:
            return state
    }
}

export default saleReducer