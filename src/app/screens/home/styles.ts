import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#363636',
        flex: 1, 
        padding: 8,
        paddingTop: 22,
    },

    eventName: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
    },

    eventDate: {
        color: '#fff', 
        fontSize: 16,
        marginTop: 2,
    },

    inputName: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 7,
        height: 45,
        paddingTop: 10,
        paddingLeft: 16,
        fontSize: 18, 
        alignItems: "center",
        
    },

    button:{
        width: 45,
        height: 45,
        backgroundColor: 'green',
        borderRadius: 5, 
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    }, 

    containerInputName: {
        flexDirection: "row", 
        marginTop: 30,
        marginBottom: 30,
        
    }
})