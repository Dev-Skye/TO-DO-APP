import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/HomeScreen';
import {useFonts} from "expo-font";
import { TouchableOpacity, View } from 'react-native';
import AppLoading from "expo-app-loading";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TextOutputScreen from './screens/TextOutputScreen';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import TextInputScreen from './screens/TextInputScreen';
import store from './redux/store';
import { Provider as StateProvider } from 'react-redux';


const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
    "Raleway-Bold": require("./assets/fonts/Raleway-Bold.ttf"),
    "Raleway-Light": require("./assets/fonts/Raleway-Light.ttf"),
    "Raleway-Black": require("./assets/fonts/Raleway-Black.ttf"),
});

if (!fontsLoaded){
    return <AppLoading/>
}
  return (
    <>
    <StateProvider store={store}>
    <StatusBar style='light'/>
    <NavigationContainer>
      <Stack.Navigator
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="TextOutputScreen" component={TextOutputScreen}
          options={{
            headerLeft:() => (
              <Feather name="menu" size={25} color="#c5c5c5" />
            ),
            headerTitle:"",
            headerStyle: {
              backgroundColor: '#030347'
            },
            headerRight: () => (
                <View style={{flexDirection:"row",  marginHorizontal: 10}}>
                    <View style={{marginRight: 15}}>
                    <Ionicons name="search" size={24} color="#c5c5c5" />
                    </View>
                    <Ionicons name="notifications-outline" size={24} color="#c5c5c5" />
                </View>
          ),
          }}
        />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
    </StateProvider>
   </>
  );
}

