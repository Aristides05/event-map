import {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Participant } from '@/src/app/components/participant';
import { styles } from './styles';

export function Home(){
    const [participants, addParticipant] = useState([] as string[]);
    let name = '';

    function handleTouchAdd(){
        if(name.trim() === ''){

            Alert.alert("Nome Inválido", "Por favor insira um nome válido")
            return;
        }

        if(participants.includes(name)){
            Alert.alert("Participante já existe", "Já existe um participante na lista com esse nome")
            return;
        }
        
        addParticipant(prevState => [...prevState, name]);
        // participants.push(name); //Pode ate funcionar porém não atualiza a pagina dinamicamente

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
                data={participants}
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