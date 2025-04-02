import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { style } from '@/src/app/components/participant/styles';

type Props = {
    name: string;
}

export function Participant({name}: Props){

    function handleTouchRemove(){
        console.log(`Você removeu o ${name}`)
        Alert.alert(
            "Remoção de Participante",
            `Você deseja remover o participante ${name}?`,
            [
                {
                    text: "Sim",
                    onPress: () => (
                        console.log(`Você removeu o ${name}`),
                        Alert.alert(`${name} removido da lista de presença!`)
                    )
                },
                {
                    text: "Não",
                    style: "cancel"
                }
            ]
        )
    }

    return(
        <View style={style.containerParticipant}>
            <Text style={style.containerText}>
                {name}
            </Text>
            
            <TouchableOpacity style={style.button} onPress={handleTouchRemove}>
                <Text>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}