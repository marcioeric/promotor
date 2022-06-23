import styled from 'styled-components/native'
import { ViewProps } from 'react-native'

import Colors from '../../themes/Colors'
import { CenterRow, MiddleCenterColumn } from '../../themes/StyleConstants'

interface TabType extends ViewProps {
    isActive: boolean
}

export const Tab = styled.View<TabType>`
    ${CenterRow}
    padding: 5px 10px;
    background-color: ${Colors.white};
    border-bottom-width: 2px;
    border-bottom-color: ${({ isActive }) => isActive ? Colors.primary : Colors.white};
`

export const Label = styled.Text.attrs({ allowFontScaling: false })`
    font-size: 14px;
    color: ${Colors.primary};
    text-transform: uppercase;
    font-weight: bold;
`

export const Category = styled.Text.attrs({ allowFontScaling: false })`
    width: 100%;
    padding: 5px 10px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    background-color: ${Colors.lightGray};
`

export const Card = styled.TouchableOpacity`
    ${CenterRow}
    width: 100%;
    padding: 8px;
    background-color: ${Colors.white};
`

export const ImageCard = styled.Image`
    width: 80px;
    height: 80px;
`

export const Body = styled.View`
    ${MiddleCenterColumn}
    justify-content: space-between;
    margin-left: 10px;
    flex: 1;
`

export const Title = styled.Text.attrs({ allowFontScaling: false })`
    color: ${Colors.primary};
    font-size: 16px;
    text-transform: uppercase;
    width: 100%;
    font-weight: bold;
`

export const Description = styled.Text.attrs({ allowFontScaling: false })`
    color: ${Colors.mediumGray};
    font-size: 14px;
    width: 100%;
`

export const Value = styled.Text.attrs({ allowFontScaling: false })`
    color: ${Colors.primary};
    font-size: 16px;
    text-align: right;
    font-weight: bold;
    width: 100%;
`

export const LineGray = styled.View`
    background-color: ${Colors.lightGray};
    width: 100%;
    height: 2px;
`