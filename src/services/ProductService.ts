import axios from 'axios'
import crashlytics from '@react-native-firebase/crashlytics'

export async function GetProducts() {
    try {
        let list = await axios.get('products')
        return list.data

    } catch (error) {
        console.warn("Error GetProducts: ", error);
        crashlytics().recordError(new Error(`Get Products: ${JSON.stringify(error.response || error)}`))
        throw error.response
    }
}

export default { GetProducts }