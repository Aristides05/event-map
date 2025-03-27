import { View, Text, TouchableOpacity } from 'react-native';
import { style } from '@/src/app/components/participant/styles';

export function Participant(){
    return(
        <View style={style.containerParticipant}>
            <View style={style.containerText}>
                <Text>
                    teste
                </Text>
            </View>

            <TouchableOpacity style={style.button}>
                <Text>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}