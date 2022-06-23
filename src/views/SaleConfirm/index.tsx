import React, { useState, useEffect } from 'react'
import { useNavigation, StackActions  } from '@react-navigation/native'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import SaleService from '../../services/SaleService'

import { setCurrentSale } from '../../redux/sale/sale.actions'

import Button from '../../components/Button'
import AlertAnimated from '../../components/AlertAnimated'
import ModalSaleReceipt from '../../components/ModalSaleReceipt'

import { Container, Scroll } from '../../themes/MainStyled'
import { Item, ImageProduct, ColumnItem, Title, Subtitle, RowTotal, ColumnTotal, TextThin, TextBold } from './styles'

interface ItemType {
    productId: number
    amount: number
    unitPrice: number
    name: string
    thumbnailUrl: string
}

interface SaleType {
    visitId: number
    storeId?: number
    saleId?: number
    items: ItemType[]
}

const SaleConfirm: React.FC = ({ currentSale, setCurrentSale, ...props }) => {

    const navigation = useNavigation()

    const [allItems, setAllItems] = useState<ItemType[]>([])
    const [total, setTotal] = useState<number>(0)
    const [saleId, setSaleId] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false)
    const [showAlertConfirmEdit, setShowAlertConfirmEdit] = useState<boolean>(false)
    const [showAlert, setShowAlert] = useState<boolean>(false)
    const [messageAlert, setMessageAlert] = useState<string>('')
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

    useEffect(() => {
        setAllItems(currentSale.items)

        let totalValue = 0
        currentSale.items.map((item: ItemType) => {
            totalValue = totalValue + (item.unitPrice * item.amount)
        })

        setTotal(totalValue)
    }, [])

    const openAlert = (message: string) => {
        setMessageAlert(message)
        setShowAlert(true)
        setLoading(false)
    }

    const goBackHistoric = () => {
        setCurrentSale({})
        setShowAlertConfirmEdit(false)
        navigation.dispatch(StackActions.pop(2))
    }

    const confirm = () => {
        setLoading(true)

        let itemsSale = allItems.map(item => ({ productId: item.productId, amount: item.amount, unitPrice: item.unitPrice }))

        let sale = {
            ...currentSale,
            items: itemsSale
        }

        if (currentSale.saleId) {
            SaleService.EditSale(currentSale.saleId, itemsSale)
                .then(() => {
                    setShowAlertConfirmEdit(true)
                })
                .catch(error => {
                    openAlert("Não foi possível editar esta venda. Tente novamente mais tarde!")
                })
        } else {
            SaleService.NewSale(sale)
                .then(resp => {
                    setTotal(resp.total)
                    setSaleId(resp.saleId)
                    setIsModalVisible(true)
                    setCurrentSale({})
                    setLoading(false)
                })
                .catch(error => {
                    openAlert("Não foi possível confirmar esta venda. Tente novamente mais tarde!")
                })
        }
    }

    return (
        <Container>
            <Scroll>
                {
                    allItems.map((item, index) => (
                        <Item key={index}>
                            <ColumnItem>
                                <Title>{`${item.amount}x ${item.name}`}</Title>
                                <Subtitle>{`R$${item.unitPrice * item.amount}`}</Subtitle>
                            </ColumnItem>
                            <ImageProduct source={{ uri: item.thumbnailUrl }} />
                        </Item>
                    ))
                }
            </Scroll>

            <RowTotal>
                <ColumnTotal>
                    <TextThin>Total</TextThin>
                    <TextBold>{`R$${total.toFixed(2).replace('.', ',')}`}</TextBold>
                </ColumnTotal>
                <Button title="Confirmar" onPress={() => confirm()} loading={loading} width={40} />
            </RowTotal>

            <ModalSaleReceipt open={isModalVisible} onClosedPress={() => setIsModalVisible(false)} total={total} saleId={saleId} />
            <AlertAnimated show={showAlert} onConfirmPressed={() => setShowAlert(false)} message={messageAlert} />
            <AlertAnimated show={showAlertConfirmEdit} onConfirmPressed={goBackHistoric} message="Venda alterada com êxito." />
        </Container>
    )
}

const mapStateToProps = state => ({
    currentSale: state.sale.currentSale,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setCurrentSale: (sale: SaleType) => dispatch(setCurrentSale(sale))
})

export default connect(mapStateToProps, mapDispatchToProps)(SaleConfirm)