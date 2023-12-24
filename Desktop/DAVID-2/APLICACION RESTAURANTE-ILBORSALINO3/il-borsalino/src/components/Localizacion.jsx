import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions'
import { PROVIDER_GOOGLE } from 'react-native-maps'

const INITIAL_POSITION = {
    latitude: 38.99987609784782,
    longitude: -0.15915346606894235,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
}




const Localizacion = () => {
    let [userLocation, setUserLocation] = useState(null);
    let [disabled, setDisabled] = useState(false)
    let [count, setCount] = useState(0)
    
    const createDirectionInstructions = async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Hey! Dame permisos')
              
              return;
            }
      
            const location = await Location.getCurrentPositionAsync();
            console.log(location)


            setDisabled(true)
            setUserLocation(location);
            setCount(count + 1)
            setTimeout(() => {
                if (count < 30){
                setDisabled(false)
                }
              }, 30000);
    

    

}
    return (
        <View style={styles.container}>
            <View style={styles.contained}>
                <MapView 
                style={styles.map} 
                showsUserLocation={true}
                initialRegion={INITIAL_POSITION}
                provider={PROVIDER_GOOGLE}
                >
                    <Marker coordinate={INITIAL_POSITION}/>
                    {(userLocation != null) && (userLocation != undefined)  ? <MapViewDirections
                    origin={{latitude: userLocation.coords.latitude, longitude: userLocation.coords.longitude}}
                    strokeColor="red"
                    strokeWidth={6}

                    destination={INITIAL_POSITION}
                    apikey='AIzaSyAUB3yvjBz26jdmY46W00Amj0c2CF2CTrU'
                    /> : null}
                </MapView>
                <TouchableOpacity onPress={!disabled && createDirectionInstructions} disabled={disabled} style={disabled ? styles.buttondisabled : styles.button}><Text style={styles.textbutton}>¡Guíame! </Text></TouchableOpacity>
            </View>
            
        
      </View>    
    );
}
 
export default Localizacion;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 40,
        // borderWidth: 1,
        // borderColor: 'white',
        //justifyContent: 'center',
      },
      contained: {
        width: '80%',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'white',
    },
      map: {
        width: 350,
        height: 350,
      },
      textbutton: {
        fontSize: 25,
        color: 'black',
        textAlign: 'center',

    },
    button: {
        marginTop: 20,
        padding: 6,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
        width: 350,

    },
    buttondisabled: {
        opacity: 0.4,
        marginTop: 20,
        padding: 6,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
        width: 350,

    }


})