import { TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'

import { CenterRow } from '../../themes/StyleConstants'

import Colors from '../../themes/Colors'

interface ContainerType extends TouchableOpacityProps {
    width?: number
    height?: number
}

export const Container = styled.TouchableOpacity<ContainerType>`
    ${CenterRow}
    width: ${({ width }) => width || 80}%;
    height: ${({ height }) => height || 45}px;
    border-radius: 6px;
    background-color: ${Colors.primary};
`

export const Title = styled.Text.attrs({ allowFontScaling: false })`
    font-size: 18px;
    color: ${Colors.white};
`

export const Loading = styled.ActivityIndicator.attrs({
    size: "small",
    color: Colors.white,
})`
    margin-right: 5px;
`