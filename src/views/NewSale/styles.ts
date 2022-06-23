import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Colors from '../../themes/Colors'
import { CenterRow, CenterColumn, MiddleCenterRow } from '../../themes/StyleConstants'

export const AddItemButtom = styled.TouchableOpacity`
    ${CenterRow}
    width: 85%;
    height: 40px;
    margin: 20px;
    border-radius: 10px;
    background-color: ${Colors.lightGray};
`

export const CleanItems = styled.TouchableOpacity`
    ${CenterRow}
    width: 100%;
    height: 35px;
    margin-top: 8px;
    background-color: ${Colors.lightGray};
`

export const TitleButtom = styled.Text.attrs({ allowFontScaling: false })`
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.primary};
    text-transform: uppercase;
`

export const Item = styled.View`
    ${MiddleCenterRow}
    justify-content: space-between;
    width: 96%;
    padding: 12px;
    margin-bottom: 10px;
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

export const Controls = styled.View`
    ${MiddleCenterRow}
    justify-content: space-between;
    width: 120px;
    height: 50px;
    padding: 5px;
    border-radius: 10px;
    background-color: ${Colors.primary};
`

export const Touch = styled.TouchableOpacity`
    ${CenterRow}
    height: 100%;
    flex: 1;
`

export const Add = styled(Icon).attrs({
    name: 'add',
    size: 28,
    color: Colors.white
})`
    padding-right: 3px;
`

export const Decrement = styled(Icon).attrs({
    name: 'minimize',
    size: 28,
    color: Colors.white
})`
    margin-bottom: 18px;
    padding-left: 5px;
`

export const Number = styled.Text.attrs({ allowFontScaling: false })`
    width: 40px;
    height: 100%;
    border-radius: 5px;
    background-color: ${Colors.white};
    text-align: center;
    font-size: 18px;
    color: ${Colors.primary};
    font-weight: bold;
    padding: 7px 0px;
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

export const EmptyList = styled.Text.attrs({ allowFontScaling: false })`
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: ${Colors.mediumGray};
    margin: 20px;
`