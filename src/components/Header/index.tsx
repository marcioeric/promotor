import React, { useEffect, useState } from 'react'
import { StackHeaderProps } from '@react-navigation/stack'
import { useNavigation, StackActions  } from '@react-navigation/native'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { setCurrentSale } from '../../redux/sale/sale.actions'
import { setCurrentPoint } from '../../redux/point/point.actions'

import AsyncStorage from '@react-native-community/async-storage'
import StoreKeys from '../../config/StoreKeys'

import UserService from '../../services/UserService'

import { Container, Column, H1, H2, BoxTouch, Logout, Arrow } from './styles'

const Header: React.FC<StackHeaderProps> = ({ currentPoint, setCurrentPoint, setCurrentSale, ...props }) => {

    const navigation = useNavigation()

    const { name } = props.scene.route

    const [title, setTitle] = useState<string>('')
    const [label, setLabel] = useState<string>('')

    useEffect(() => {
        if (name == "Home" || name == "SalesPointList") {
            AsyncStorage.getItem(StoreKeys.UserName)
                .then(resp => {
                    setLabel('Promotor(a)')
                    setTitle(resp)
                })
        } else {
            setLabel('Ponto de Venda')
            setTitle(currentPoint.store.tradeName)
        }
    }, [])

    const logout = () => {
        UserService.Logout()
            .then(() => {
                setCurrentSale({})
                setCurrentPoint({})
                navigation.reset({ routes: [{ name: 'Login' }] })
            })
    }

    const back = () => {
        if (name == "SalesPointTasks") {
            if (currentPoint.visitId) {
                navigation.dispatch(StackActions.pop(2))
            } else {
                navigation.goBack()
            }
        } else {
            navigation.goBack()
        }
    }

    return (
        <Container>
            {
                name != "Home" ?
                    <BoxTouch onPress={() => back()}>
                        <Arrow />
                    </BoxTouch>
                    : null
            }
            <Column alignType={name != "Home" ? 1 : 0}>
                <H2>{label}</H2>
                <H1>{title}</H1>
            </Column>
            <BoxTouch onPress={() => logout()}>
                <Logout />
            </BoxTouch>
        </Container>
    )
}

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

interface Store {
    tradeName: string
    document: string
    date: string
}

interface PointType {
    id: number
    store: Store
}

const mapStateToProps = state => ({
    currentPoint: state.point.currentPoint
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setCurrentSale: (sale: SaleType) => dispatch(setCurrentSale(sale)),
    setCurrentPoint: (point: PointType) => dispatch(setCurrentPoint(point))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
