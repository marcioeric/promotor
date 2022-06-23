import styled from 'styled-components/native'

import { CenterColumn } from '../../themes/StyleConstants'
import Colors from '../../themes/Colors'

export const Item = styled.TouchableOpacity`
    ${CenterColumn}
    width: 96%;
    margin: 5px;
    padding: 10px;
    border-radius: 6px;
    border-left-width: 4px;
    border-left-color: ${Colors.primary};
    background-color: ${Colors.lightGray};
`

interface TextType {
    alignType?: number
}

const TextItem = styled.Text.attrs({ allowFontScaling: false })`
    width: 100%;
    text-transform: uppercase;
    font-weight: bold;
`

export const H1 = styled(TextItem)`
    font-size: 18px;
    color: ${Colors.primary};
`

export const H2 = styled(TextItem)<TextType>`
    font-size: 14px;
    color: ${Colors.mediumGray};
    text-align: ${({ alignType }) => alignType == 1 ? 'right' : 'left'};
`

export const EmptyList = styled.Text.attrs({ allowFontScaling: false })`
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: ${Colors.mediumGray};
    margin: 20px;
`