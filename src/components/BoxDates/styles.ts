import styled from 'styled-components/native'
import { TextProps, TouchableOpacityProps } from 'react-native'

import { MiddleCenterRow, MiddleCenterColumn, CenterColumn } from '../../themes/StyleConstants'
import Colors from '../../themes/Colors'

export const Container = styled.View`
    ${CenterColumn}
    width: 100%;
    height: 130px;
`

export const Month = styled.Text.attrs({ allowFontScaling: false })`
    color: ${Colors.primary};
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    width: 100%;
    margin-top: 8px;
`

export const Box = styled.View`
    ${MiddleCenterRow}
    justify-content: space-between;
    width: 100%;
    flex: 1;
`

export const BarDate = styled.View`
    ${MiddleCenterColumn}
    justify-content: space-between;
    width: 14.2%;
`

export const DayGray = styled.Text.attrs({ allowFontScaling: false })`
    font-size: 14px;
    color: ${Colors.mediumGray};
    margin: 5px 0px;
    font-weight: bold;
`

interface BoxDateType extends TouchableOpacityProps {
    typeColor: number
}

export const BoxDate = styled.TouchableOpacity<BoxDateType>`
    ${MiddleCenterColumn}
    justify-content: space-between;
    width: 48px;
    height: 56px;
    padding: 8px;
    border-radius: 10px;
    background-color: ${({ typeColor }) => typeColor == 1 ? Colors.primary : (typeColor == 2 ? Colors.lightGray : 'transparent')};;
`

interface DayType extends TextProps {
    typeColor: number
}

export const Day = styled.Text.attrs({ allowFontScaling: false })<DayType>`
    font-size: 14px;
    color: ${({ typeColor }) => typeColor == 1 ? Colors.white : Colors.primary};
    font-weight: bold;
`