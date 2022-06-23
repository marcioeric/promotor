import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import StoreKeys from './StoreKeys'

export const Bootstrap = () => {

    axios.defaults.baseURL = 'https://promotor.alice.indgo.com.br/api/'
    axios.defaults.timeout = 25000
    axios.interceptors.request.use(async config => {
        try {
            const token = await AsyncStorage.getItem(StoreKeys.UserToken)
            config.headers.Authorization = token ? `Bearer ${token}` : ''
            return config
        } catch (error) {
            console.error(error);
        }
    })
}