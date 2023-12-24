import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { HomeStack } from './navigation/stack';
import 'react-native-gesture-handler';
import Main from './src/components/Main2';
import { MyDrawer } from './navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import  SignIn from './src/components/SignIn.jsx';

const Stack = createNativeStackNavigator();

const getIsSignedIn = () => {
  return false;
}


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Test</Text>
//       <TouchableWithoutFeedback onPress={() => Alert.alert('Hemos tocado el texto!')}>
//       <Text>Otro test</Text>
//       </TouchableWithoutFeedback>
//       <StatusBar style="auto" />
//     </View>
//   );
// }


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    //primary: 'rgb(255, 45, 85)',
    background: 'black',
  },
};


export default function App() {

  const isSignedIn = getIsSignedIn();
  return (
  // <NavigationContainer theme={MyTheme}>
  //   <MyDrawer/>
  //   <StatusBar style='light' backgroundColor="black"/>
  // </NavigationContainer>

  <NavigationContainer theme={MyTheme}>
      {isSignedIn ? (
        <MyDrawer/>
      ):(<>   
      <MyDrawer/>
      </> )}
    
  
  <StatusBar style='light' backgroundColor="black"/>
</NavigationContainer>
  )
}

            {/* <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >     
      <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
