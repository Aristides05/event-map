import { View, Text, StatusBar } from 'react-native';
import {Home}  from './screens/home';

export default function App(){
    return(
        <>
            <StatusBar 
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent //Testar no android Studio
            />
            <Home />
        </>
    )
}
