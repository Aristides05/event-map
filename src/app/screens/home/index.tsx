import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Participant } from '@/src/app/components/participant';
import { styles } from './styles';

export function Home(){

    let name = '';

    function handleTouchAdd(){
        console.log(`Você adicionou o ${name}`)
    }

    return(  
        <View style={styles.container}>
            <Text style={styles.eventName}>
                NOME DO EVENTO
            </Text>
        
            <Text style={styles.eventDate}>
                DATA DO EVENTO
            </Text>

            <View style={styles.containerInputName}>
                <TextInput style={styles.inputName}
                 placeholder='Nome do Caboco'
                 onChangeText={(text) => (name = text)}
                />

                <TouchableOpacity style={styles.button} onPress={handleTouchAdd}>
                   <Text>+</Text>
                </TouchableOpacity>
            </View>

            <Participant name='teste1'/>
            <Participant name='test2'/>    
            <Participant name='teste3'/>    
              
        </View>
    )
}