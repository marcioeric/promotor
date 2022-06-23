import axios from 'axios'
import crashlytics from '@react-native-firebase/crashlytics'

export async function GetVisits() {
    try {
        let list = await axios.get('visits')
        return list.data

    } catch (error) {
        console.warn("Error GetVisits: ", error);
        crashlytics().recordError(new Error(`Get Visits: ${JSON.stringify(error.response || error)}`))
        throw error.response
    }
}

export async function NewVisit(routeId: number) {
    try {
        let visit = await axios.post('visits', { routeId })
        return visit.data

    } catch (error) {
        console.warn("Error NewVisit: ", error);
        crashlytics().recordError(new Error(`New Visit: ${JSON.stringify(error.response || error)}`))
        throw error.response
    }
}

export async function CloseVisit(visitId: number) {
    try {
        await axios.delete(`visits/${visitId}`)
        return true

    } catch (error) {
        console.warn("Error CloseVisit: ", error);
        crashlytics().recordError(new Error(`Close Visit: ${JSON.stringify(error.response || error)}`))
        throw error.response
    }
}

export default { GetVisits, NewVisit, CloseVisit }