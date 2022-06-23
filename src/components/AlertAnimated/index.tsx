import React from 'react'
import styled from 'styled-components/native'
import AwesomeAlert from 'react-native-awesome-alerts'

import Colors from '../../themes/Colors'

interface AlertType {
    show: boolean
    onConfirmPressed: () => void
    message: string
    showCancelButton?: boolean
    cancelText?: string
    onCancelPressed?: () => void
    confirmText?: string
    textTitle?: string
}

const Alert = styled(AwesomeAlert).attrs(props => ({
    title: 'Atenção!',
    titleStyle: { fontSize: 20 },
    showProgress: false,
    closeOnTouchOutside: false,
    closeOnHardwareBackPress: false,
    showConfirmButton: true,
    confirmText: props.confirmText || 'ok',
    confirmButtonColor: Colors.green,
    confirmButtonStyle: { width: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' },
    confirmButtonTextStyle: { fontSize: 16 },
    showCancelButton: props.showCancelButton || false,
    cancelText: props.cancelText || 'Não',
    cancelButtonColor: Colors.red,
    cancelButtonStyle: { width: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' },
    cancelButtonTextStyle: { fontSize: 16 },
    messageStyle: {
        fontSize: 18,
        textAlign: 'center',
    }
}))``

const AlertAnimated: React.FC<AlertType> = (props) => (
    <Alert {...props} />
)

export default AlertAnimated