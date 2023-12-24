// 897741554779-p8rqm03sigv0i7fsfativqa439usqcba.apps.googleusercontent.com
//android 897741554779-5j74q8nb5s69si39jg53v600ibleutve.apps.googleusercontent.com
//ios 897741554779-2rhb5moet3f1r1juq4bhptln8s6kn51t.apps.googleusercontent.com

import * as React from 'react';
import * as WebBrowser from "expo-web-browser";
import * as Google from 'expo-auth-session/providers/google';



import { useNavigation } from "@react-navigation/native";
import { View,  Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';
import { useState } from 'react';



WebBrowser.maybeCompleteAuthSession();

const SignIn = () => {
  const [uniqueId, setuniqueId] = useState()
  console.log({uniqueId})
  const navigation = useNavigation()
   var [userInfo, setUserInfo] = React.useState(null)
   const [request, response, promptAsync] = Google.useAuthRequest({
     webClientId:"897741554779-p8rqm03sigv0i7fsfativqa439usqcba.apps.googleusercontent.com",androidClientId:"897741554779-5j74q8nb5s69si39jg53v600ibleutve.apps.googleusercontent.com",
     iosClientId: "897741554779-2rhb5moet3f1r1juq4bhptln8s6kn51t.apps.googleusercontent.com",
   });

   React.useEffect(() => {
    const getuniqueID = async ()=>{
      let uniID =await DeviceInfo.getuniqueID()
      setuniqueId(uniID)
    }  
    getuniqueID()
    handleSignInWithGoogle();
   }, [response])

   async function handleSignInWithGoogle(){
    const user = await AsyncStorage.getItem("@user");

    //console.log(response)
    if (!user) {
      if (response?.type === "success"){
      await getUserInfo(response.authentication.accessToken);
    }

    } else {
      setUserInfo(JSON.parse(user))

    }

    async function getUserInfo(token) {
      if (!token) {
        console.log('There is no token')
      };
      try {
        const response = await fetch("https://www.googleapis.com/userinfo/v2/me",{
          headers: { Authorization: `Bearer ${token}`},
        })

        const user = await response.json();
        // console.log(user)
        // console.log(user)
        await setUserInfo(JSON.stringify(user));
        // await new Promise(r => setTimeout(r, 2000));
        console.log('userInfo', userInfo)
        await AsyncStorage.setItem("@user", JSON.stringify(user));
        //AsyncStorage.removeItem("@user")


      } catch (error) {

      }
    }
   }
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>{JSON.stringify(userInfo)}</Text>

    <TouchableOpacity style={styles.applesign}>
      <Text style={styles.applesigntext}>Loguéate con Apple</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={promptAsync} style={styles.googlesign}>
      <Text style={styles.googlesigntext}>Loguéate con Google</Text>
    </TouchableOpacity>


    <View><Text style={styles.textout}>Solo requerimos tu email, ningún dato más</Text></View>

    <View style={styles.container2}>

    <Image
        style={styles.lasbrasas}
        source={require("../../assets/adaptive-icon.png")}
      />

    </View>





    </View>

  )
}

export default SignIn;


const styles = StyleSheet.create({
  container: {
      flexDirection: 'column-reverse',
      justifyContent: 'flex-start',
      flex: 1
      // position: 'absolute',
      // bottom: 0
  },
  textout: {
    color: 'white',
    textAlign: 'center'
  },
  googlesign: {
    backgroundColor: 'white',
    padding: 15,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    margin: 15,

  },
  googlesigntext: {
    color: 'black',
    textAlign: 'center'
  },
  applesign: {
    backgroundColor: 'black',
    padding: 15,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,

  },
  applesigntext: {
    color: 'white',
    textAlign: 'center'
  },
  lasbrasas: {
    width: 400,
    height: 400,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  container2: {
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 30,
  }
})