import styled from 'styled-components/native'

import Colors from '../../themes/Colors'
import { MiddleCenterRow, CenterColumn } from '../../themes/StyleConstants'

export const Item = styled.View`
    ${MiddleCenterRow}
    justify-content: space-between;
    width: 96%;
    padding: 12px;
    margin-top: 10px;
    border-radius: 10px;
    background-color: ${Colors.lightGray};
`

export const ImageProduct = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 8px;
`

export const ColumnItem = styled.View`
    ${CenterColumn}
    flex: 1;
    padding: 0px 10px;
`

export const Title = styled.Text.attrs({ allowFontScaling: false })`
    color: ${Colors.primary};
    width: 100%;
    font-size: 16px;
`

export const Subtitle = styled.Text.attrs({ allowFontScaling: false })`
    color: ${Colors.primary};
    width: 100%;
    font-size: 18px;
    font-weight: bold;
`

export const RowTotal = styled.View`
    ${MiddleCenterRow}
    justify-content: space-between;
    width: 100%;
    padding: 10px 15px;
`

export const ColumnTotal = styled.View`
    ${CenterColumn}
`

export const TextThin = styled.Text.attrs({ allowFontScaling: false })`
    color: ${Colors.primary};
    width: 100%;
    font-size: 15px;
    text-transform: uppercase;
`

export const TextBold = styled.Text.attrs({ allowFontScaling: false })`
    color: ${Colors.primary};
    width: 100%;
    font-size: 22px;
    font-weight: bold;
`