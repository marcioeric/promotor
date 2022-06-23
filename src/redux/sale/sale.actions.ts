import { SaleActionTypes, SaleType }  from './sale.types'

export const setCurrentSale = (sale: SaleType) => ({
    type: SaleActionTypes.SET_CURRENT_SALE,
    payload: sale
})