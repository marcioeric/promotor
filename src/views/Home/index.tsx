import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Dispatch } from "redux"
import { connect } from 'react-redux'

import VisitService from '../../services/VisitService'

import { setCurrentPoint } from '../../redux/point/point.actions'

import AlertAnimated from '../../components/AlertAnimated'

import { Container } from '../../themes/MainStyled'
import { Card, IconRoute, Title, Arrow } from './styles'

interface Store {
    tradeName: string
}

interface PointType {
    visitId: number
    store: Store
}

const Home: React.FC = ({ setCurrentPoint, ...props }) => {
    const navigation = useNavigation()

    const [showAlert, setShowAlert] = useState<boolean>(false)
    const [messageAlert, setMessageAlert] = useState<string>('')

    const openAlert = (message: string) => {
        setMessageAlert(message)
        setShowAlert(true)
    }

    const checkVisitStarted = () => {
        VisitService.GetVisits()
            .then(resp => {
                setCurrentPoint(resp)
                navigation.navigate("SalesPointTasks")
            })
            .catch(error => {
                if (error.data.status == 404) {
                    navigation.navigate("SalesPointList")
                } else {
                    openAlert('Ocorreu um erro ao acessar as rotas. Tente novamente mais tarde!')
                }
            })
    }

    return (
        <Container>
            <Card onPress={() => checkVisitStarted()}>
                <IconRoute />
                <Title>Rota</Title>
                <Arrow />
            </Card>
            
            <AlertAnimated show={showAlert} onConfirmPressed={() => setShowAlert(false)} message={messageAlert} />
        </Container>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setCurrentPoint: (point: PointType) => dispatch(setCurrentPoint(point))
})

export default connect(null, mapDispatchToProps)(Home)