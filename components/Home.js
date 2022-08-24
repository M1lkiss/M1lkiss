import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';
//import AppLoading from 'expo-app-loading';


SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);
export default function Home({navigation}) {
  let [fontsLoaded] = useFonts({
    'bubble': require('.././assets/SWEETASCANDY.TTF'),
  });
  if (!fontsLoaded) {
    return <Text>ERROR HOME</Text>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.bubble}>My</Text>
      <Text style={styles.bubble}>Virtual</Text>
      <Text style={styles.bubble}>Closet</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyCloset')}>
        <Text style={styles.font}>My Closet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.font}>Create Outfit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.font}>Saved Outfits</Text>
      </TouchableOpacity>
     
      {/* <StatusBar style="auto" /> */}
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
  fontFamily: "bubble",
  fontSize: 60,
  padding: 10,
  color: "#675041",
  },
});
