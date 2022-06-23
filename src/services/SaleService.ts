import axios from 'axios'
import crashlytics from '@react-native-firebase/crashlytics'

export async function GetSales(visitId: number) {
    try {
        let list = await axios.get(`sales?visitId=${visitId}`)
        return list.data

    } catch (error) {
        console.warn("Error GetSales: ", error);
        crashlytics().recordError(new Error(`Get Sales: ${JSON.stringify(error.response || error)}`))
        throw error.response
    }
}

export async function GetSaleById(saleId: number) {
    try {
        let list = await axios.get(`sales/${saleId}`)
        return list.data

    } catch (error) {
        console.warn("Error GetSaleById: ", error);
        crashlytics().recordError(new Error(`Get Sales By Id: ${JSON.stringify(error.response || error)}`))
        throw error.response
    }
}

interface ItemType {
    productId: number,
    amount: number
    unitPrice: number
}

interface SaleType {
    visitId: number
    storeId?: number
    items: ItemType[]
}

export async function NewSale(sale: SaleType) {
    try {
        let visit = await axios.post('sales', sale)
        return visit.data

    } catch (error) {
        console.warn("Error NewSale: ", error);
        crashlytics().recordError(new Error(`New Sale: ${JSON.stringify(error.response || error)}`))
        throw error.response
    }
}

export async function EditSale(saleId: number, items: ItemType[]) {
    try {
        let response = await axios.put(`sales/${saleId}`, { items })
        return response.data

    } catch (error) {
        console.warn("Error EditSale: ", error);
        crashlytics().recordError(new Error(`Edit Sale: ${JSON.stringify(error.response || error)}`))
        throw error.response
    }
}

export async function CancelSale(saleId: number) {
    try {
        await axios.delete(`sales/${saleId}`)
        return true

    } catch (error) {
        console.warn("Error CancelSale: ", error);
        crashlytics().recordError(new Error(`Cancel Sale: ${JSON.stringify(error.response || error)}`))
        throw error.response
    }
}

export default { GetSales, GetSaleById, NewSale, EditSale, CancelSale }