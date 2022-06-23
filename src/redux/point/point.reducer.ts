import { PointType, PointActionTypes }  from './point.types'

interface ActionType {
    type: string
    payload: PointType
}

const INITIAL_STATE = {
    currentPoint: {}
}

const pointReducer = (state = INITIAL_STATE, action: ActionType) => {
    switch (action.type) {
        case PointActionTypes.SET_CURRENT_POINT:
            return {
                ...state,
                currentPoint: action.payload
            }
            
        default:
            return state
    }
}

export default pointReducer