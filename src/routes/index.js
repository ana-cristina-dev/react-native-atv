import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Sobre from '../pages/Sobre';

const Stack = createNativeStackNavigator();

export default function Routes() {
    // Arquivo responsável pelas rotas da aplicação
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Home'
            component={Home}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen
            name='Sobre'
            component={Sobre}/>
        </Stack.Navigator>
    )
}
