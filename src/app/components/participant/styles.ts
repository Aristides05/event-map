import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    containerParticipant: {
        marginTop: 15,
        flexDirection: 'row',
    },

    containerText: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 7,
        height: 45,
        paddingTop: 10,
        paddingLeft: 16,
        fontSize: 18, 
        alignItems: "center",
        
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