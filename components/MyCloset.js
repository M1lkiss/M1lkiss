import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';
//import AppLoading from 'expo-app-loading';


SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);
export default function MyCloset({navigation}) {
  // let [fontsLoaded] = useFonts({
  //   'bubble': require('.././assets/SWEETASCANDY.TTF'),
  // });
  // if (!fontsLoaded) {
  //   return <Text>ERROR MYCLOSET</Text>;
  // }
  return (
    <View style={styles.container} >
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Catergory')}>
        <Text style={styles.font}>Catergories</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
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
  //fontFamily: "bubble",
  fontSize: 60,
  padding: 10,
  color: "#675041",
  },
});
