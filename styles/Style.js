import { StyleSheet } from "react-native"
import Constants from "expo-constants"



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight + 10
    },
    textinputs: {
        margin: 5,
        backgroundColor: 'rgb(255, 255, 255',
        color: 'rgb(120, 69, 172)',
    },
    buttons: {
        margin: 5
    },
    header:{
        fontSize: 30,
        margin: 10,
        textAlign: "center",
        color: "rgb(120, 69, 172)",
    },
    
    card:{
        border: 1,
        backgroundColor: "rgb(237, 221, 246)",
        margin: 5
    },

    workoutsum:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    workoutText:{
        fontSize: 20,
        margin: 20,
        color: "rgb(120, 69, 172)",
    },

    
});

export { styles }