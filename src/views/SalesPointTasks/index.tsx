import React, { useState, useEffect } from 'react'
import { BackHandler } from 'react-native'
import { useNavigation, StackActions } from '@react-navigation/native'
import { connect } from 'react-redux'

import VisitService from '../../services/VisitService'

import AlertAnimated from '../../components/AlertAnimated'

import { Container } from '../../themes/MainStyled'
import { Item, Image, Label } from './styles'

import IconCheckin from '../../assets/img/icons/check-in.png'
import IconSale from '../../assets/img/icons/sale.png'
import IconHistoric from '../../assets/img/icons/historic.png'
import IconCheckout from '../../assets/img/icons/check.png'

const SalesPointTasks: React.FC = ({ currentPoint, ...props }) => {
    const navigation = useNavigation()

    const [showAlert, setShowAlert] = useState<boolean>(false)
    const [showAlertError, setShowAlertError] = useState<boolean>(false)

    const checkout = () => {
        VisitService.CloseVisit(currentPoint.visitId)
            .then(() => {
                setShowAlert(false)
                navigation.goBack()
            })
            .catch(() => {
                setShowAlert(false)
                setTimeout(() => {
                    setShowAlertError(true)
                }, 500)
            })
    }

    const hasVisit = () => {
        if (currentPoint.visitId) {
            return true
        }
        return false
    }

    const back = () => {
        if (hasVisit()) {
            navigation.dispatch(StackActions.pop(2))
        } else {
            navigation.goBack()
        }
        return true
    }

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", back)

        return () => {
            BackHandler.removeEventListener("hardwareBackPress", back)
        }
    })

    return (
        <Container>
            <Item onPress={() => navigation.navigate("SalesPointCheckin")} disabled={hasVisit()}>
                <Image source={IconCheckin} />
                <Label disabled={hasVisit()}>Check-in</Label>
            </Item>
            <Item onPress={() => navigation.navigate("NewSale")} disabled={!hasVisit()}>
                <Image source={IconSale} />
                <Label disabled={!hasVisit()}>Nova Venda</Label>
            </Item>
            <Item onPress={() => navigation.navigate("SalesPointHistory")} disabled={!hasVisit()}>
                <Image source={IconHistoric} />
                <Label disabled={!hasVisit()}>Histórico de Vendas</Label>
            </Item>
            <Item onPress={() => setShowAlert(true)} disabled={!hasVisit()}>
                <Image source={IconCheckout} />
                <Label disabled={!hasVisit()}>Check-out</Label>
            </Item>

            <AlertAnimated show={showAlert} onConfirmPressed={() => checkout()} confirmText="Sim" showCancelButton={true} onCancelPressed={() => setShowAlert(false)} message="Deseja encerrar esta visita?" />
            <AlertAnimated show={showAlertError} onConfirmPressed={() => setShowAlertError(false)} message="Não foi possível finalizar esta visita. Tente novamente mais tarde!" />
        </Container>
    )
}

const mapStateToProps = state => ({
    currentPoint: state.point.currentPoint
})

export default connect(mapStateToProps, null)(SalesPointTasks)