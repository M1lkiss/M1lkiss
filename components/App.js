import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';
import Home from "./Home";
import MyCloset from "./MyCloset";
import Catergory from "./Catergory"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import AppLoading from 'expo-app-loading';


SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);

const Stack = createNativeStackNavigator();

export default function App() {
   let [fontsLoaded] = useFonts({
     'bubble': require('../assets/SWEETASCANDY.TTF'),
   });
  if (!fontsLoaded) {
    return <Text>ERROR APP</Text>;
  }
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ title: 'Overview' }}/>
      <Stack.Screen name="MyCloset" component={MyCloset}/>
      <Stack.Screen name="Catergory" component={Catergory}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef9ea',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    borderWidth: 5,
    borderRadius: 20,
    borderColor: "#675041",
    padding: 5,
    margin: 10,
    
  },
  font: {
    fontSize: 45,
    color: "#675041",
  },

  bubble: {
  fontFamily: "bubble",
  fontSize: 60,
  padding: 10,
  color: "#675041",
  },
});
