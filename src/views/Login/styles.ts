import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons'

import Constants from '../../config/Constants'
import Colors from '../../themes/Colors'
import { CenterRow } from '../../themes/StyleConstants'

export const Logo = styled.Image.attrs({ source: Constants.Logo })`
    width: 200px;
    height: 140px;
    margin-bottom: 30px;
`

export const Touch = styled.TouchableOpacity`
    width: 80%;
    margin-bottom: 30px;
`

export const ForgotPassword = styled.Text.attrs({ allowFontScaling: false })`
    width: 100%;
    font-size: 16px;
    color: ${Colors.primary};
`

export const ViewInput = styled.View`
    ${CenterRow}
    width: 100%;
`

export const TouchIcon = styled.TouchableOpacity`
    position: absolute;
    top: 35px;
    right: 46px;
`

export const IconEye = styled(Icon).attrs({
    name: 'eye',
    size: 32,
    color: Colors.primary
})``

export const IconEyeOff = styled(Icon).attrs({
    name: 'eye-off',
    size: 32,
    color: Colors.primary
})``
