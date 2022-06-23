export interface ItemType {
    productId: number
    amount: number
    unitPrice: number
    name: string
    thumbnailUrl: string
}

export interface SaleType {
    visitId: number
    storeId?: number
    saleId?: number
    items: ItemType[]
}

export const SaleActionTypes = {
    SET_CURRENT_SALE: 'SET_CURRENT_SALE'
}