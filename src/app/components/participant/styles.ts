import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    containerParticipant: {
        flex: 1,
        flexDirection: 'row',
    },

    containerText: {
        backgroundColor: 'white', 
        
    }, 

    button: {
        width: 45,
        height: 45,
        backgroundColor: 'red',
        borderRadius: 5, 
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    }
})