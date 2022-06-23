import React from 'react'

import { Provider } from 'react-redux'
import store from './src/redux/store'

import moment from 'moment'
import 'moment/min/locales'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Splash from './src/views/Splash'
import Login from './src/views/Login'
import Home from './src/views/Home'
import SalesPointList from './src/views/SalesPointList'
import SalesPointTasks from './src/views/SalesPointTasks'
import SalesPointCheckin from './src/views/SalesPointCheckin'
import NewSale from './src/views/NewSale'
import SaleItem from './src/views/SaleItem'
import SaleConfirm from './src/views/SaleConfirm'
import SalesPointHistory from './src/views/SalesPointHistory'

import Header from './src/components/Header'

const Stack = createStackNavigator()

const App: React.FC = () => {
    moment.locale('pt-br')
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash" >
                    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="Home" component={Home} options={{ header: (props) => <Header {...props} /> }} />
                    <Stack.Screen name="SalesPointList" component={SalesPointList} options={{ header: (props) => <Header {...props} /> }} />
                    <Stack.Screen name="SalesPointTasks" component={SalesPointTasks} options={{ header: (props) => <Header {...props} /> }} />
                    <Stack.Screen name="SalesPointCheckin" component={SalesPointCheckin} options={{ header: (props) => <Header {...props} /> }} />
                    <Stack.Screen name="NewSale" component={NewSale} options={{ header: (props) => <Header {...props} /> }} />
                    <Stack.Screen name="SaleItem" component={SaleItem} options={{ header: (props) => <Header {...props} /> }} />
                    <Stack.Screen name="SaleConfirm" component={SaleConfirm} options={{ header: (props) => <Header {...props} /> }} />
                    <Stack.Screen name="SalesPointHistory" component={SalesPointHistory} options={{ header: (props) => <Header {...props} /> }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App
