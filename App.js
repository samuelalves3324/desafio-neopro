import Home from './src/pages/Home';
import AddCards from './src/pages/AddCards';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddCards" component={AddCards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
