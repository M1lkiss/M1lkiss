import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';
import CatergoryItem from './CatergoryItem';
import {icon} from '../assets/shirtIcon.png';

//import AppLoading from 'expo-app-loading';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const clothingCategories = [
  {
    categoryName:"Shirt"
  },
  {
    categoryName:"Pants"
  },
  {
    categoryName:"Shoes"
  },
  {
    categoryName:"Accesories"
  },
]

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);
export default function Catergory() {

  let items = clothingCategories.map((item,i)=> <CatergoryItem key={i} itemData={item}/>)  

  let [fontsLoaded] = useFonts({
    'bubble': require('.././assets/SWEETASCANDY.TTF'),
  });
  if (!fontsLoaded) {
    return <Text>ERROR CATERGORY</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.outter}>
        {items}
        
      </View>
      <TouchableOpacity style={styles.button}><Text style={styles.font}>Create</Text></TouchableOpacity>
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
    height: 48,
    width: 240,
    borderWidth: 5,
    borderRadius: 20,
    borderColor: "#675041",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    margin: 10,
    
  },
  font: {
    fontSize: 45,
    color: "#675041",
    fontWeight: 600,
  },

  bubble: {
  // fontFamily: "bubble",
  fontSize: 60,
  padding: 10,
  color: "#675041",
  },

  outter: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.7, 
    borderStyle: "solid", 
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 40,
  },

  image: {
    height: 32,
    width:32,
  },

  container2: {
    flex: 1,
    backgroundColor: '#fef9ea',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 48,
  },
});
