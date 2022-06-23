import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import StoreKeys from '../../config/StoreKeys'

import { ContainerCenter } from '../../themes/MainStyled'
import { Logo } from './styles'

const Splash: React.FC = () => {

    const navigation = useNavigation()

    const navigate = () => {
        AsyncStorage.getItem(StoreKeys.UserToken)
            .then(token => {
                if (token) {
                    navigation.reset({ routes: [{ name: 'Home' }] })
                } else {
                    navigation.reset({ routes: [{ name: 'Login' }] })
                }
            })
            .catch(() => {
                navigation.reset({ routes: [{ name: 'Login' }] })
            })
    }

    useEffect(() => navigate(), [])

    return (
        <ContainerCenter>
            <Logo />
        </ContainerCenter>
    )
}

export default Splash
