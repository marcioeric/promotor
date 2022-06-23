import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import UserService from '../../services/UserService'

import Input from '../../components/Input'
import Button from '../../components/Button'
import AlertAnimated from '../../components/AlertAnimated'

import { ContainerCenter } from '../../themes/MainStyled'
import { Logo, Touch, ForgotPassword, ViewInput, TouchIcon, IconEye, IconEyeOff } from './styles'

const Login: React.FC = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [showAlert, setShowAlert] = useState<boolean>(false)
    const [messageAlert, setMessageAlert] = useState<string>('')
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const navigation = useNavigation()

    const openAlert = (message: string) => {
        setMessageAlert(message)
        setShowAlert(true)
        setLoading(false)
    }

    const regexEmail = /[A-Za-z0-9][\w.]+@[a-z]+\.[a-z]{2}/

    const handlePressLogin = () => {
        setLoading(true)
        if (!regexEmail.test(email)) {
            openAlert('E-mail inválido.')

        } else if (password.length < 6) {
            openAlert('É necessário que a senha possua no mínimo 6 caracteres.')

        } else {
            UserService.Login(email, password)
                .then(() => {
                    setLoading(false)
                    navigation.reset({ routes: [{ name: 'Home' }] })
                })
                .catch(error => {
                    openAlert('Não foi possível realizar o login. Verifique se o usuário e a senha estão corretos!')
                    console.warn(error);
                })
        }
    }

    const toggleViewPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <ContainerCenter>
            <Logo />

            <Input label="E-mail" value={email} onChangeText={text => setEmail(text)} editable={!loading} />
            <ViewInput>
                <Input label="Senha" value={password} onChangeText={text => setPassword(text)} secureTextEntry={!showPassword} editable={!loading} />
                <TouchIcon onPress={() => toggleViewPassword()}>
                    {showPassword ? <IconEyeOff /> : <IconEye />}
                </TouchIcon>
            </ViewInput>

            <Touch>
                <ForgotPassword>Esqueceu a senha?</ForgotPassword>
            </Touch>

            <Button title="Login" loading={loading} onPress={() => handlePressLogin()} />

            <AlertAnimated show={showAlert} onConfirmPressed={() => setShowAlert(false)} message={messageAlert} />
        </ContainerCenter>
    )
}

export default Login