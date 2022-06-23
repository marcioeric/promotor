import React, { useState, useEffect } from 'react'
import SectionList from 'react-native-tabs-section-list'
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import ProductService from '../../services/ProductService'

import { setCurrentSale } from '../../redux/sale/sale.actions'

import Loading from '../../components/Loading'
import AlertAnimated from '../../components/AlertAnimated'

import { Container } from '../../themes/MainStyled'
import { Tab, Label, Category, Card, ImageCard, Body, Title, Description, Value, LineGray } from './styles'

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
    items: ItemType[]
}

interface ProductType {
    id: number
    name: string
    description: string
    price: number
    thumbnailUrl: string
}

interface CategoryType {
    category: string
    data: ProductType[]
}

const SaleItem: React.FC = ({ currentPoint, currentSale, setCurrentSale }) => {

    const navigation = useNavigation()

    const [categories, setCategories] = useState<CategoryType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [showAlert, setShowAlert] = useState<boolean>(false)
    const [messageAlert, setMessageAlert] = useState<string>('')

    const openAlert = (message: string) => {
        setMessageAlert(message)
        setShowAlert(true)
    }

    useEffect(() => {
        setLoading(true)
        ProductService.GetProducts()
            .then(resp => {
                setCategories(resp)
                setLoading(false)
            })
            .catch(error => {
                openAlert("Não foi possível listar os produtos. Tente novamente mais tarde.")
            })
    }, [])

    const addItem = (item: ProductType) => {
        if (currentSale.visitId == undefined && currentSale.saleId == undefined) {
            setCurrentSale({
                visitId: currentPoint.visitId,
                storeId: currentPoint.id || null,
                items: [{ productId: item.id, amount: 1, unitPrice: item.price, name: item.name, thumbnailUrl: item.thumbnailUrl }]
            })

        } else {
            let findItem = currentSale.items.find((i: ItemType) => i.productId == item.id)
            let currentItems = currentSale.items

            if (findItem == undefined) {
                currentItems.push({ productId: item.id, amount: 1, unitPrice: item.price, name: item.name, thumbnailUrl: item.thumbnailUrl })
                setCurrentSale({ ...currentSale, items: currentItems })

            } else {
                let indexItem = currentSale.items.indexOf(findItem)
                let updateItem = { ...currentSale.items[indexItem], amount: currentSale.items[indexItem].amount + 1 }

                currentItems.splice(indexItem, 1, updateItem)

                setCurrentSale({ ...currentSale, items: currentItems })
            }
        }

        navigation.goBack()
    }

    return (
        <Container>
            {
                loading ?
                    <Loading />
                    :
                    <SectionList
                        sections={categories}
                        keyExtractor={item => item.category}
                        stickySectionHeadersEnabled={false}
                        scrollToLocationOffset={50}
                        ItemSeparatorComponent={() => <LineGray />}
                        renderTab={({ category, isActive }) => (
                            <Tab isActive={isActive} >
                                <Label>{category}</Label>
                            </Tab>
                        )}
                        renderSectionHeader={({ section }) => (
                            <Category>{section.category}</Category>
                        )}
                        renderItem={({ item }) => (
                            <Card onPress={() => addItem(item)}>
                                <ImageCard source={{ uri: item.thumbnailUrl }} />
                                <Body>
                                    <>
                                        <Title>{item.name}</Title>
                                        <Description>{item.description}</Description>
                                    </>
                                    <Value>{`R$${item.price.toFixed(2).replace('.', ',')}`}</Value>
                                </Body>
                            </Card>
                        )}
                    />
            }
            <AlertAnimated show={showAlert} onConfirmPressed={() => setShowAlert(false)} message={messageAlert} />
        </Container>
    )
}

const mapStateToProps = state => ({
    currentSale: state.sale.currentSale,
    currentPoint: state.point.currentPoint
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setCurrentSale: (sale: SaleType) => dispatch(setCurrentSale(sale))
})

export default connect(mapStateToProps, mapDispatchToProps)(SaleItem)