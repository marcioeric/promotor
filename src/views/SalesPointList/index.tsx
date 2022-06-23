import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Dispatch } from "redux"
import { connect } from 'react-redux'
import moment from 'moment'

import RouteService from '../../services/RouteService'

import { setCurrentPoint } from '../../redux/point/point.actions'

import BoxDates from '../../components/BoxDates'
import Loading from '../../components/Loading'
import AlertAnimated from '../../components/AlertAnimated'

import { Container, Scroll } from '../../themes/MainStyled'
import { Item, H1, H2, EmptyList } from './styles'

interface Store {
    tradeName: string
    document: string
    date: string
}

interface PointType {
    id: number
    store: Store
}

const SalesPointList: React.FC = ({ setCurrentPoint, ...props }) => {
    const navigation = useNavigation()

    const [points, setPoints] = useState<PointType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [showAlert, setShowAlert] = useState<boolean>(false)
    const [messageAlert, setMessageAlert] = useState<string>('')

    const openAlert = (message: string) => {
        setMessageAlert(message)
        setShowAlert(true)
    }

    const listRoutes = (date?: string) => {
        setLoading(true)
        RouteService.GetRoutes(date)
            .then(resp => {
                setPoints(resp)
                setLoading(false)
            })
            .catch(error => {
                openAlert('Ocorreu um erro ao listar as rotas. Tente novamente mais tarde!')
            })
    }

    useEffect(() => {
        listRoutes()
    }, [])

    const handlePressPoint = (point: PointType) => {
        setCurrentPoint(point)
        navigation.navigate("SalesPointTasks")
    }

    return (
        <Container>
            <BoxDates press={date => listRoutes(moment(date).format('YYYY-MM-DD'))} />
            {
                loading ?
                    <Loading />
                    :
                    <Scroll>
                        {
                            points.map((point, index) => (
                                <Item key={index} onPress={() => handlePressPoint(point)}>
                                    <H1>{point.store.tradeName}</H1>
                                    <H2>{point.store.document}</H2>
                                    <H2 alignType={1}>{point.store.date}</H2>
                                </Item>
                            ))
                        }
                        {points.length == 0 ? <EmptyList>Não há agendamentos disponíveis.</EmptyList> : null}
                    </Scroll>
            }
            <AlertAnimated show={showAlert} onConfirmPressed={() => setShowAlert(false)} message={messageAlert} />
        </Container>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setCurrentPoint: (point: PointType) => dispatch(setCurrentPoint(point))
})

export default connect(null, mapDispatchToProps)(SalesPointList)