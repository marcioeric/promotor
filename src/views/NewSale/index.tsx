import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { setCurrentSale } from '../../redux/sale/sale.actions'

import SaleService from '../../services/SaleService';

import Button from '../../components/Button'
import AlertAnimated from '../../components/AlertAnimated'

import { Container, Scroll } from '../../themes/MainStyled'
import { AddItemButtom, CleanItems, TitleButtom, Item, ImageProduct, ColumnItem, Title, Subtitle, Controls, Touch, Add, Decrement, Number, RowTotal, ColumnTotal, TextThin, TextBold, EmptyList } from './styles'

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

const NewSale: React.FC = ({ currentSale, setCurrentSale, ...props }) => {

    const navigation = useNavigation()

    const [items, setItems] = useState<ItemType[]>([])
    const [total, setTotal] = useState<number>(0)
    const [showAlert, setShowAlert] = useState<boolean>(false)
    const [messageAlert, setMessageAlert] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const openAlert = (message: string) => {
        setMessageAlert(message)
        setShowAlert(true)
        setLoading(false)
    }

    useEffect(() => {
        if (props?.route?.params?.saleId) {
            SaleService.GetSaleById(props.route.params.saleId)
                .then(resp => {
                    setCurrentSale({ ...currentSale, items: resp.items, saleId: props.route.params.saleId })
                })
        }
    }, [props?.route?.params])

    useEffect(() => {
        if (currentSale.visitId != undefined || currentSale.saleId != undefined) {
            setItems(currentSale.items)

            let totalValue = 0
            currentSale?.items?.map((item: ItemType) => {
                totalValue = totalValue + (item.unitPrice * item.amount)
            })

            setTotal(totalValue)
        }
    }, [currentSale])

    const finish = () => {
        setLoading(true)
        if ((currentSale.visitId == undefined && currentSale.saleId == undefined) || currentSale.items.length == 0) {
            openAlert("Adicione itens para finalizar uma venda.")

        } else {
            setLoading(false)
            navigation.navigate("SaleConfirm")
        }
    }

    const clearAllItems = () => {
        setCurrentSale({ saleId: props?.route?.params?.saleId, items: [] })
        setItems([])
        setTotal(0)
    }

    const addItem = (item: ItemType) => {
        let findItem = currentSale.items.find((i: ItemType) => i.productId == item.productId)
        let indexItem = currentSale.items.indexOf(findItem)

        let currentItems = currentSale.items

        let updateItem = { ...currentSale.items[indexItem], amount: currentSale.items[indexItem].amount + 1 }

        currentItems.splice(indexItem, 1, updateItem)

        setCurrentSale({ ...currentSale, items: currentItems })
    }

    const decrementItem = (item: ItemType) => {
        let findItem = currentSale.items.find((i: ItemType) => i.productId == item.productId)
        let indexItem = currentSale.items.indexOf(findItem)

        let currentItems = currentSale.items

        if (currentSale.items[indexItem].amount == 1) {
            currentItems.splice(indexItem, 1)

        } else {
            let updateItem = { ...currentSale.items[indexItem], amount: currentSale.items[indexItem].amount - 1 }

            currentItems.splice(indexItem, 1, updateItem)
        }

        setCurrentSale({ ...currentSale, items: currentItems })
    }

    return (
        <Container>
            <AddItemButtom onPress={() => navigation.navigate("SaleItem")}>
                <TitleButtom>Adicionar Item</TitleButtom>
            </AddItemButtom>

            <Scroll>
                {
                    items.map((item, index) => (
                        <Item key={index}>
                            <ImageProduct source={{ uri: item.thumbnailUrl }} />
                            <ColumnItem>
                                <Title>{item.name}</Title>
                                <Subtitle>R${item.unitPrice.toFixed(2).replace('.', ',')}</Subtitle>
                            </ColumnItem>
                            <Controls>
                                <Touch onPress={() => addItem(item)}><Add /></Touch>
                                <Number>{item.amount}</Number>
                                <Touch onPress={() => decrementItem(item)}><Decrement /></Touch>
                            </Controls>
                        </Item>
                    ))
                }
                {items.length == 0 ? <EmptyList>Não há itens.</EmptyList> : null}
            </Scroll>

            {
                items.length > 0 ?
                    <CleanItems onPress={() => clearAllItems()}>
                        <TitleButtom>Limpar Carrinho</TitleButtom>
                    </CleanItems>
                    : null
            }

            <RowTotal>
                <ColumnTotal>
                    <TextThin>Total</TextThin>
                    <TextBold>{`R$${total.toFixed(2).replace('.', ',')}`}</TextBold>
                </ColumnTotal>
                <Button title="Finalizar" onPress={() => finish()} loading={loading} width={40} />
            </RowTotal>

            <AlertAnimated show={showAlert} onConfirmPressed={() => setShowAlert(false)} message={messageAlert} />
        </Container>
    )
}

const mapStateToProps = state => ({
    currentSale: state.sale.currentSale,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setCurrentSale: (sale: SaleType) => dispatch(setCurrentSale(sale))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewSale)