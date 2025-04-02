import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Participant } from '@/src/app/components/participant';
import { styles } from './styles';

export function Home(){

    let name = '';
    let nameList: string[] = [];

    function handleTouchAdd(){
        console.log(`Você adicionou o ${name}`)
        nameList.push(name);
        Alert.alert(
            "Adição de Participante",
            `${name} adicionado a lista de presença!`
        )

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
                renderItem={({item}) => <Participant name={item} />}
                keyExtractor={item => item}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text>
                        Nenhum participante adicionado
                    </Text>
                )}
            />

              
        </View>
    )
}