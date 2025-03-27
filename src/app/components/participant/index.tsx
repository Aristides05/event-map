import { View, Text, TouchableOpacity } from 'react-native';
import { style } from '@/src/app/components/participant/styles';

type Props = {
    name: string;
}

export function Participant({name}: Props){
    function handleTouchRemove(){
        console.log(`Você removeu o ${name}`)
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