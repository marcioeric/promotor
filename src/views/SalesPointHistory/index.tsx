import React, { useState, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import SaleService from '../../services/SaleService'

import Loading from '../../components/Loading'
import AlertAnimated from '../../components/AlertAnimated'

import { Container, Scroll } from '../../themes/MainStyled'
import { Card, BodyCard, Row, H1, H2, Bold, EmptyList, TouchIcon, Pen, Trash } from './styles'

interface ItemType {
    id: number
    value: number
    hour: string
}

const SalesPointHistory: React.FC = ({ currentPoint, currentSale, ...props }) => {

    const navigation = useNavigation()

    const [listHistoric, setListHistoric] = useState<ItemType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [showAlert, setShowAlert] = useState<boolean>(false)
    const [messageAlert, setMessageAlert] = useState<string>('')
    const [showAlertDeleteSale, setShowAlertDeleteSale] = useState<boolean>(false)
    const [saleIdSelected, setSaleIdSelected] = useState<number>(0);

    const getListSales = () => {
        setLoading(true)
        SaleService.GetSales(currentPoint.visitId)
            .then(resp => {
                setListHistoric(resp)
                setLoading(false)
            })
            .catch(error => {
                openAlert("Ocorreu um erro ao listar o histórico de vendas. Tente novamente mais tarde!")
            })
    }

    useEffect(() => {
        getListSales()
    }, [currentPoint, currentSale])

    const handlePressEdit = (id: number) => {
        navigation.navigate("NewSale", { saleId: id })
    }

    const confirmCancelSale = () => {
        setShowAlertDeleteSale(false)
        SaleService.CancelSale(saleIdSelected)
            .then(() => {
                getListSales()
                openAlert(`Venda #${saleIdSelected} cancelada.`)
            })
            .catch(error => {
                openAlert(`Não foi possível cancelar a Venda #${saleIdSelected}.`)
            })
    }

    const handlePressCancel = (id: number) => {
        setSaleIdSelected(id)
        setShowAlertDeleteSale(true)
    }

    const openAlert = (message: string) => {
        setMessageAlert(message)
        setShowAlert(true)
        setLoading(false)
    }

    return (
        <Container>
            {
                loading ?
                    <Loading />
                    :
                    <Scroll>
                        {
                            listHistoric.length == 0 ?
                                <EmptyList>Nenhuma venda foi realizada.</EmptyList>
                                :
                                listHistoric.map((historic, index) => (
                                    <Card key={index}>
                                        <BodyCard>
                                            <H2>{`Venda #${historic.id}`}</H2>
                                            <Row>
                                                <H1>Valor: <Bold>{` R$${historic.value}`}</Bold></H1>
                                                <H1>Hora: <Bold>{`${historic.hour}h`}</Bold></H1>
                                            </Row>
                                        </BodyCard>
                                        <TouchIcon onPress={() => handlePressEdit(historic.id)}>
                                            <Pen />
                                        </TouchIcon>
                                        <TouchIcon onPress={() => handlePressCancel(historic.id)}>
                                            <Trash />
                                        </TouchIcon>
                                    </Card>
                                ))
                        }
                    </Scroll>
            }
            <AlertAnimated show={showAlert} onConfirmPressed={() => setShowAlert(false)} message={messageAlert} />
            <AlertAnimated
                show={showAlertDeleteSale}
                confirmText="Sim"
                onConfirmPressed={() => confirmCancelSale()}
                message={`Tem certeza que deseja cancelar a Venda #${saleIdSelected}`}
                showCancelButton={true}
                onCancelPressed={() => setShowAlertDeleteSale(false)}
            />
        </Container>
    )
}

const mapStateToProps = state => ({
    currentPoint: state.point.currentPoint,
    currentSale: state.sale.currentSale
})

export default connect(mapStateToProps, null)(SalesPointHistory)