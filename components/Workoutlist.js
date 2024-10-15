import { FlatList, SafeAreaView, View } from "react-native"
import { Card, Icon, Text } from "react-native-paper"
import { styles } from "../styles/Style"
import { WorkoutContext } from "./Workoutcontext"
import { useContext } from "react"



function WorkoutList() {

    const { workout } = useContext(WorkoutContext)

    const runningKm = workout
        .filter(item => item.sport === 'Juoksu')
        .reduce((sum, item) => sum + Number(item.km), 0)

    const walkKm = workout
        .filter(item => item.sport === 'Kävely')
        .reduce((sum, item) => sum + Number(item.km), 0)

    const golfKm = workout
        .filter(item => item.sport === 'Golf')
        .reduce((sum, item) => sum + Number(item.km), 0)

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Treenit</Text>
            <View style={styles.workoutsum}>
                <Icon source='walk' size={30} color="rgb(120, 69, 172)" />
                <Text style={styles.workoutText}>{walkKm} Km</Text>
                <Icon source='run' size={30} color="rgb(120, 69, 172)" />
                <Text style={styles.workoutText}>{runningKm} Km</Text>
                <Icon source='golf' size={30} color="rgb(120, 69, 172)" />
                <Text style={styles.workoutText}>{golfKm} Km</Text>
            </View>
            <FlatList
                data={workout}
                renderItem={Item}
                keyExtractor={(item, index) => `${item.sport}-${item.day}-${index}`}
            />
        </SafeAreaView>
    )
}

function Item({ item }) {
    return (
        <Card style={styles.card}>
            <Card.Title title={item.sport + ' ' + item.day} />
            <Card.Content>
                <Text>Matka: {item.km} km </Text>
                <Text>Aika: {item.time} min</Text>
            </Card.Content>
        </Card>
    )
}

export { WorkoutList }