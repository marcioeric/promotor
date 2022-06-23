import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import StoreKeys from '../config/StoreKeys'
import crashlytics from '@react-native-firebase/crashlytics'

export async function Login(email: string, password: string) {
    try {
        let login = await axios.post('account/login', { email, password })
        let { accessToken, name } = login.data

        await AsyncStorage.setItem(StoreKeys.UserToken, accessToken)
        await AsyncStorage.setItem(StoreKeys.UserName, name)

        return accessToken

    } catch (error) {
        console.warn("Error Login: ", error);
        crashlytics().recordError(new Error(`Login: ${JSON.stringify(error.response || error)}`))
        throw error.response
    }
}

export async function Logout() {
    try {
        await AsyncStorage.removeItem(StoreKeys.UserToken)

        return true

    } catch (error) {
        console.warn("Error Logout: ", error);
        crashlytics().recordError(new Error(`Logout: ${JSON.stringify(error.message || error)}`))
        throw error
    }
}

export default { Login, Logout }