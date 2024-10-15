import { useContext, useState } from "react";
import { Modal, Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import { Text, Button, SegmentedButtons, TextInput, HelperText } from "react-native-paper";
import { styles } from "../styles/Style";
import { Calendar } from "react-native-calendars";
import { WorkoutContext } from "./Workoutcontext";

const buttons = [{
    value: 'Kävely',
    label: 'Kävely',
    icon: 'walk'
},
{
    value: 'Juoksu',
    label: 'Juoksu',
    icon: 'run'
},
{
    value: 'Golf',
    label: 'Golf',
    icon: 'golf'
}]

function WorkoutForm() {

    const [km, setKm] = useState('')
    const [time, setTime] = useState('')
    const [sport, setSport] = useState()
    const [show, setShow] = useState(false)
    const [day, setDay] = useState('Valitse päivä')
    const { workout, setWorkout } = useContext(WorkoutContext)

    function AddWorkout() {
        const modified = [...workout, { sport, day, km, time }]
        setWorkout(modified)
        setKm('');
        setTime('');
        setSport(undefined);
        setDay('Valitse päivä');
    }

    const isValidNumber = (text) => {
        return /^\d*(,\d*)?$/.test(text);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>Treeni päväkirja </Text>
                <TextInput label='Matka (Km)' value={km} onChangeText={(text) => setKm(text)} style={styles.textinputs} keyboardType="decimal-pad" mode="outlined" />
                <HelperText type="error" visible={!isValidNumber(km)}>Numero ei kelpaa</HelperText>
                <TextInput label='Aika (min)' value={time} onChangeText={(text) => setTime(text)} style={styles.textinputs} keyboardType="decimal-pad" mode="outlined" />
                <HelperText type="error" visible={!isValidNumber(time)}>Numero ei kelpaa</HelperText>
                <SegmentedButtons value={sport} onValueChange={setSport} buttons={buttons} style={styles.buttons} />
                <Modal visible={show} transparent={false} presentationStyle="formSheet">
                    <Calendar
                        onDayPress={day => {
                            setShow(false)
                            setDay(day.dateString)
                        }}
                    />
                </Modal>
                <Button style={styles.buttons} mode="outlined" onPress={() => setShow(true)}>{day}</Button>
                <Button mode="contained" style={styles.buttons} onPress={AddWorkout} >Lisää treeni</Button>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export { WorkoutForm }