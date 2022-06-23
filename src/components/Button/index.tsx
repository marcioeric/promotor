import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Container, Title, Loading } from './styles'

interface ButtonType extends TouchableOpacityProps {
    title: string
    loading?: boolean
    width?: number
    height?: number
}

const Button: React.FC<ButtonType> = ({ title, loading, width, height, onPress }, props) => (
    <Container width={width} height={height} onPress={onPress} {...props}>
        {loading ? <Loading /> : null}
        <Title>{title}</Title>
    </Container>
)

export default Button