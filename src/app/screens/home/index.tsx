import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Participant } from '@/src/app/components/participant';
import { styles } from './styles';

export function Home(){

    let name = '';
    let nameList = ["Sophia", "Miguel", "Alice", "Arthur", "Laura", "Enzo", "Valentina", "Davi", "Isabella", "Gabriel", "Helena", "Lucas", "Luiza", "Pedro", "Beatriz"];

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

            <FlatList 
                data={nameList}
                renderItem=
                
            />

              
        </View>
    )
}