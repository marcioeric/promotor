import styled from 'styled-components/native'
import IconAnt from 'react-native-vector-icons/AntDesign'

import RouteImg from '../../assets/img/icons/route.png'

import { MiddleCenterRow } from '../../themes/StyleConstants'
import Colors from '../../themes/Colors'

export const Card = styled.TouchableOpacity`
    ${MiddleCenterRow}
    justify-content: space-between;
    width: 96%;
    height: 80px;
    margin: 10px;
    padding: 15px;
    border-radius: 10px;
    background-color: ${Colors.lightGray};
`

export const IconRoute = styled.Image.attrs({ source: RouteImg })`
    width: 56px;
    height: 56px;
`

export const Title = styled.Text.attrs({ allowFontScaling: false })`
    font-size: 20px;
    color: ${Colors.primary};
    margin-left: 22px;
    font-weight: bold;
    flex: 1;
`

export const Arrow = styled(IconAnt).attrs({
    name: "right",
    color: Colors.primary,
    size: 24
})``