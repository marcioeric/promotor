import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'

import VisitService from '../../services/VisitService'

import { setCurrentPoint } from '../../redux/point/point.actions'

import AlertAnimated from '../../components/AlertAnimated'
import Button from '../../components/Button'

import { Container } from '../../themes/MainStyled'

interface Store {
    tradeName: string
    document: string
    date: string
}

interface PointType {
    id: number
    store: Store
}

const SalesPointCheckin: React.FC = ({ currentPoint, setCurrentPoint, ...props }) => {
    const navigation = useNavigation()

    const [showAlert, setShowAlert] = useState<boolean>(false)
    const [messageAlert, setMessageAlert] = useState<string>('')

    const openAlert = (message: string) => {
        setMessageAlert(message)
        setShowAlert(true)
    }

    const initVisit = () => {
        VisitService.NewVisit(currentPoint.id)
            .then(resp => {
                setCurrentPoint({ visitId: resp.visitId, ...currentPoint })
                navigation.goBack()
            })
            .catch(error => {
                openAlert('Ocorreu um erro ao iniciar esta visita. Tente novamente mais tarde!')
            })
    }

    return (
        <Container>
            <Button title="Iniciar Visita" onPress={() => initVisit()} />

            <AlertAnimated show={showAlert} onConfirmPressed={() => setShowAlert(false)} message={messageAlert} />
        </Container>
    )
}

const mapStateToProps = state => ({
    currentPoint: state.point.currentPoint
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setCurrentPoint: (point: PointType) => dispatch(setCurrentPoint(point))
})

export default connect(mapStateToProps, mapDispatchToProps)(SalesPointCheckin)