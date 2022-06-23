import React from 'react'
import { useNavigation, StackActions } from '@react-navigation/native'

import Button from '../../components/Button'

import { Modal, Background, Container, ImageReceipt, Column, Title, Subtitle } from './styles'

interface ModalType {
    open: boolean
    onClosedPress: () => void
    total: number
    saleId: number
}

const ModalSaleReceipt: React.FC<ModalType> = ({ open, onClosedPress, total, saleId }) => {

    const navigation = useNavigation()

    const closeModal = () => {
        navigation.dispatch(StackActions.pop(2))
        onClosedPress()
    }

    return (
        <Modal visible={open}>
            <Background>
                <Container>
                    <ImageReceipt />

                    <Column>
                        <Title>{`Venda realizada com êxito!`}</Title>
                        <Subtitle>{`Total: R$${total.toFixed(2).replace('.', ',')} - Código: ${saleId}`}</Subtitle>
                    </Column>

                    <Button title="Ok" onPress={() => closeModal()} width={100} />
                </Container>
            </Background>
        </Modal>
    )
}

export default ModalSaleReceipt