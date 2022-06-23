import { PointActionTypes, PointType }  from './point.types'

export const setCurrentPoint = (point: PointType) => ({
    type: PointActionTypes.SET_CURRENT_POINT,
    payload: point
})