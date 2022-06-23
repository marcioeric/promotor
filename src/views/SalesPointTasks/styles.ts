import styled from 'styled-components/native'

import Colors from '../../themes/Colors'
import { MiddleCenterRow } from '../../themes/StyleConstants'

export const Item = styled.TouchableOpacity`
    ${MiddleCenterRow}
    width: 100%;
    height: 70px;
    padding: 5px 15px;
    background-color: ${({ disabled }) => disabled ? Colors.lightGray : Colors.white};
    border-bottom-width: 2px;
    border-bottom-color: ${({ disabled }) => disabled ? Colors.white : Colors.lightGray};
`

export const Image = styled.Image`
    width: 50px;
    height: 50px;
    margin-right: 25px;
`

interface TextType {
    disabled?: boolean
}

export const Label = styled.Text.attrs({ allowFontScaling: false })<TextType>`
    width: 100%;
    font-size: 18px;
    color: ${({ disabled }) => disabled ? Colors.mediumGray : Colors.primary};
    text-transform: uppercase;
    /* font-weight: bold; */
`