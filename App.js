import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Foodcount from './components/food/Foodcount';
import Home from './components/home/Home';
import Calculate from './components/calculate/Calculate';
import Bmi from './components/bmi/Bmi';
import Calories from './components/calories/Calories';
import Calorieswomen from './components/calorieswomen/Calorieswomen';
import Play from './components/play/Play';
import Session from './components/session/Session';
import Chest from './components/chest/Chest';
import Biceps from './components/biceps/Biceps';
import Back from './components/back/Back';
import Triceps from './components/triceps/Triceps';


const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={() => ({
            headerShown: false,
          })}>
          <Stack.Screen name="Home">
            {({navigation}) => <Home navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="Foodcount">
            {({navigation}) => <Foodcount navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="Calculate">
            {({navigation}) => <Calculate navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="Bmi">
            {({navigation}) => <Bmi navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="Calories">
            {({navigation}) => <Calories navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="Calorieswomen">
            {({navigation}) => <Calorieswomen navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="Play">
            {({navigation}) => <Play navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="Session">
            {({navigation}) => <Session navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="Chest">
            {({navigation}) => <Chest navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="Biceps">
            {({navigation}) => <Biceps navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="Back">
            {({navigation}) => <Back navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="Triceps">
            {({navigation}) => <Triceps navigation={navigation} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
