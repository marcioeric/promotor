import axios from 'axios'
import crashlytics from '@react-native-firebase/crashlytics'

export async function GetRoutes(date?: string) {
    try {
        let list = await axios.get(`routes?date=${date || ''}`)
        return list.data

    } catch (error) {
        console.warn("Error GetRoutes: ", error);
        crashlytics().recordError(new Error(`Get Routes: ${JSON.stringify(error.response || error)}`))
        throw error.response
    }
}

export default { GetRoutes }