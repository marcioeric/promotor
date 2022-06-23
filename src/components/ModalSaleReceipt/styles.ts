import styled from 'styled-components/native'

import Colors from '../../themes/Colors'
import { MiddleCenterColumn, CenterColumn } from '../../themes/StyleConstants'

import IconReceipt from '../../assets/img/icons/receipt.png'

export const Modal = styled.Modal.attrs({
    transparent: true,
    animationType: 'fade'
})`
    flex: 1;
`

export const Background = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`

export const Container = styled.View`
    ${MiddleCenterColumn}
    justify-content: space-between;
    width: 94%;
    height: 500px;
    padding: 22px;
    border-radius: 10px;
    background-color: ${Colors.white};
`

export const ImageReceipt = styled.Image.attrs({ source: IconReceipt })`
    width: 160px;
    height: 160px;
    margin-top: 50px;
`

export const Column = styled.View`
    ${CenterColumn}
`

export const Title = styled.Text.attrs({ allowFontScaling: false })`
    font-size: 20px;
    color: ${Colors.primary};
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 5px;
`

export const Subtitle = styled.Text.attrs({ allowFontScaling: false })`
    font-size: 20px;
    color: ${Colors.primary};
`
