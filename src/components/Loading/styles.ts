import styled from 'styled-components/native'

import { CenterColumn } from '../../themes/StyleConstants'
import Colors from '../../themes/Colors'

export const Container = styled.View`
    ${CenterColumn}
    width: 100%;
    height: 250px;
`

export const LoadingIcon = styled.ActivityIndicator.attrs({
    size: 'large',
    color: Colors.primary
})``