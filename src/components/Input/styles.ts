import { TextInputProps, ViewProps } from 'react-native'
import styled, { css } from 'styled-components/native'

import Colors from '../../themes/Colors'

interface ContainerType extends ViewProps {
    width?: number
}

export const Container = styled.View<ContainerType>`
    display: flex;
    flex-direction: column;
    width: ${({ width }) => width || 80}%;
    margin-bottom: 12px;
    background-color: ${Colors.white};
`

const PropsLabel = css`
    font-size: 18px;
    margin-bottom: 5px;
`

export const Label = styled.Text.attrs({ allowFontScaling: false })`
    ${PropsLabel}
    color: ${Colors.primary};
`

export const Required = styled.Text.attrs({ allowFontScaling: false })`
    ${PropsLabel}
    color: ${Colors.red};
`

interface InputType extends TextInputProps {
    error: boolean
}

export const InputText = styled.TextInput<InputType>`
    width: 100%;
    height: 45px;
    margin: 0px;
    padding: 5px 10px;
    font-size: 16px;
    color: ${Colors.primary};
    border-radius: 6px; 
    border: solid 1px ${({ error }) => error ? Colors.red : Colors.primary};
`