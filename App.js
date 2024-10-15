import { BottomNavigation, MD2LightTheme, PaperProvider } from 'react-native-paper';
import { useState } from 'react';
import { WorkoutForm } from './components/Workoutform';
import { WorkoutList } from './components/Workoutlist';
import { WorkoutContext } from './components/Workoutcontext';

const routes = [
  {key: 'addworkout', title: 'Add Workout', focusedIcon: 'clipboard-plus-outline' },
  {key: 'workoutlist', title: 'Workout list', focusedIcon: 'clipboard-list-outline' }
]


export default function App() {
  
  const [workout, setWorkout] = useState([])
  const [index, setIndex] = useState(0)


  const renderScene = BottomNavigation.SceneMap({
    addworkout: WorkoutForm,
    workoutlist: WorkoutList
  })
  
  return (
    
    <PaperProvider theme={MD2LightTheme}>
      <WorkoutContext.Provider value={{workout, setWorkout}}>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
      </WorkoutContext.Provider>
    </PaperProvider>
  )
}

