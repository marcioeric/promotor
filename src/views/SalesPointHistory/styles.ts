import styled from 'styled-components/native'

import Icon from 'react-native-vector-icons/Ionicons'
import Colors from '../../themes/Colors'
import { MiddleCenterRow, CenterRow } from '../../themes/StyleConstants'

export const Card = styled.View`
    ${MiddleCenterRow}
    width: 96%;
    margin: 5px;
    padding: 8px 10px;
    border-radius: 5px;
    background-color: ${Colors.lightGray};
`

export const BodyCard = styled.View`
    display: flex;
    flex-direction: column;
    width: 80%;
`

export const Row = styled.View`
    ${MiddleCenterRow}
`

export const H1 = styled.Text.attrs({ allowFontScaling: false })`
    font-size: 16px;
    color: ${Colors.primary};
    width: 50%;
`

export const H2 = styled.Text.attrs({ allowFontScaling: false })`
    text-transform: uppercase;
    font-size: 13px;
    color: ${Colors.primary};
    width: 100%;
    margin-bottom: 4px;
`

export const Bold = styled.Text`
    font-weight: bold;
`

export const EmptyList = styled.Text.attrs({ allowFontScaling: false })`
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: ${Colors.mediumGray};
    margin: 20px;
`

export const TouchIcon = styled.TouchableOpacity`
    ${CenterRow}
    height: 100%;
    flex: 1;
`

export const Pen = styled(Icon).attrs({
    name: "md-pencil-sharp",
    color: Colors.primary,
    size: 26
})``

export const Trash = styled(Icon).attrs({
    name: "ios-trash-sharp",
    color: Colors.primary,
    size: 26
})``