export interface StoreType {
    tradeName: string
    document?: string
    date?: string
}

export interface PointType {
    visitId: number
    id?: number
    store: StoreType
}

export const PointActionTypes = {
    SET_CURRENT_POINT: 'SET_CURRENT_POINT'
}