import MapView, {Marker, Polyline} from 'react-native-maps';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions'

const INITIAL_POSITION = {
    latitude: 38.97202883306928,
    longitude: -0.1752190440403845,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
}
TEST = null
location = null
// let TEST = '{"latitude": '+ userLocation.coords.latitude.toString()+', "longitude": '+ userLocation.coords.longitude.toString() + '}'



const Localizacion = () => {
    let [userLocation, setUserLocation] = useState(null);

    const renderElement = (TEST, userLocation) => {
        if ((userLocation != null) && (userLocation != undefined)){
            if (TEST != 'undefined'){
                return <MapViewDirections
                origin={JSON.parse(TEST)}
                destination={INITIAL_POSITION}
                apikey='AIzaSyAUB3yvjBz26jdmY46W00Amj0c2CF2CTrU'
                />
            }else{
                return null
            }
        } else {
            return null
        }
    }
    
    const createDirectionInstructions = async () => {
        //console.log('Hello')
            // permissions check
      let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Hey! Dame permisos')
              // do something when permission is denied
              return;
            }
      
            location = await Location.getCurrentPositionAsync();
            console.log(location)
            // let TEST = '{"latitude": '+ userLocation.coords.latitude.toString()+', "longitude": '+ userLocation.coords.longitude.toString() + '}'
            // console.log(TEST)

            setUserLocation(location);

            TEST='{"latitude": '+ userLocation.coords.latitude.toString()+', "longitude": '+ userLocation.coords.longitude.toString() + '}'

            
            console.log('string')
            console.log(TEST)
            console.log('json')
            console.log(JSON.parse(TEST))  
            
            //Alert.alert(location)
    

    

}
    return (
        <View style={styles.container}>
            <View>
            <View style={styles.contained}>
                <MapView 
                style={styles.map} 
                showsUserLocation={true}
                initialRegion={INITIAL_POSITION}
                >
                <Marker coordinate={INITIAL_POSITION}/>
                {this.renderElement(TEST, location)}

                </MapView>
                <TouchableOpacity onPress={createDirectionInstructions} style={styles.button}><Text style={styles.textbutton}>¡Guíame!</Text></TouchableOpacity>
            </View>
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
        //alignItems: 'stretch',
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

    }


})