import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import SearchScreen from './screeens/SearchScreen';
import ResultShowScreen from './screeens/ResultShowScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerTitle:'Khan Restoran'}}>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="ResultsShow" component={ResultShowScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
