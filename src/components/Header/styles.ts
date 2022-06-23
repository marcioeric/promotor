import styled, { css } from 'styled-components/native'
import { ViewProps } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import IconAnt from 'react-native-vector-icons/AntDesign'

import Colors from '../../themes/Colors'
import { MiddleCenterRow, CenterColumn } from '../../themes/StyleConstants'

export const Container = styled.View`
    ${MiddleCenterRow}
    justify-content: space-between;
    width: 100%;
    height: 70px;
    padding: 5px 0px;
    background-color: ${Colors.primary};
`

interface ColumnType extends ViewProps {
    alignType: number
}

const Left = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Column = styled.View<ColumnType>`
    ${({ alignType }) => alignType == 1 ? CenterColumn : Left}
    height: 100%;
    flex: 1;
`

const TextHeader = styled.Text`
    color: ${Colors.white};
    text-transform: uppercase;
    margin: 0px 8px;
    text-align: center;
`

export const H1 = styled(TextHeader)`
    font-size: 16px;
`

export const H2 = styled(TextHeader)`
    font-size: 12px;
`

export const BoxTouch = styled.TouchableOpacity`
    ${CenterColumn}
    align-items: flex-start;
    width: 40px;
    height: 40px;
    margin: 0px 5px;
`

export const Arrow = styled(IconAnt).attrs({
    name: "left",
    color: Colors.white,
    size: 30
})``

export const Logout = styled(Icon).attrs({
    name: "log-out-outline",
    color: Colors.white,
    size: 40
})``