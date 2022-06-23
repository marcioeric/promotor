import React from 'react'
import { TextInputProps } from 'react-native'

import { Container, Label, Required, InputText } from './styles'

interface InputType extends TextInputProps {
    label: string
    width?: number
    required?: boolean
    error?: boolean
}

const Input: React.FC<InputType> = ({label, width, required, error, value, onChangeText, secureTextEntry }, props) => (
    <Container width={width}>
        <Label>{label} {required ? <Required>*</Required> : ''}</Label>
        <InputText error={error} value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} {...props} />
    </Container>
)

export default Input