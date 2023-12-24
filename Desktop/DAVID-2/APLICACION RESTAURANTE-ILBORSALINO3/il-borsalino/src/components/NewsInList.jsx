import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from "react";
import {Video} from 'expo-av';
import ScaledImage from "./ScaledImage";


const NewsInList = ({offer}) => {

    const navigation = useNavigation()
    const description = offer.description
    const substring = description.substr(0,90) + '\u2026'

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    const isVideoOrImage = (link) => {
        
        
        const isImageVar = isImage(link);
        const isVideoVar = isVideo(link);

        if(isImageVar == true && isVideoVar == false){
            isstatusagain = 'image'
        }
        else if(isImageVar == false && isVideoVar == true){
            isstatusagain = 'video'
        }

        return isstatusagain
    }

  

    const isImage = (v) => {
        const imageExtensions = ['.gif', '.jpeg', '.png', '.jpg'] 

        imagestatus = false

        imageExtensions.map((e) => {
          if (isstatus = v.includes(e)){
            imagestatus = true
          }
        })
        return imagestatus        
      };
      const isVideo = (v) => {
        const videoExtensions = ['.mpg', '.mp2', '.mpeg', '.mpe', '.mpv', '.mp4'] //you can add more extensions

        videostatus = false
        videoExtensions.map((e) => {
          if (isstatus = v.includes(e))
          videostatus = true
        })     
        return videostatus
      };
    
    return(
        <>
            <View style={styles.card}>
            <View style={styles.almostinsidecard}>
                <View style={styles.insidecard}>
            <View>
            <Text style={styles.textBold}>{offer.title}</Text>
            </View>

            </View>
                {isVideoOrImage(offer.image_link) == 'image' ? offer.image? <ScaledImage style={{marginTop: 20, marginBottom: 20}} uri={offer.image_link} width={300} />: null : <Video ref={video}source={{uri: offer.image_link}} useNativeControls style={styles.video} resizeMode="contain" isLooping onPlaybackStatusUpdate={setStatus}/>}
            <View>

            <View>
            <Text style={styles.textDate}>{offer.readabledate}</Text>
            </View>
            
            <View>
            <Text style={styles.textDate}>{substring}</Text>
            </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={
                ()=>{

                navigation.navigate('Novedad', {eventId: offer.id})

                }
                }>
                    <Text style={styles.textbutton}>Ver novedad</Text>
                </TouchableOpacity >
                </View>
                </View>
        
        </>

    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: 280,
        

        marginTop: 10,
        padding: 15,
        backgroundColor: 'black',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 30,
    },
    text: {
        color: '#09DECB'
    },
    textDate: {
        color: 'white'
    },
    textBold: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center'
    },
    insidecard: {
        //marginBottom: 20,
        // borderWidth: 5,
        // borderColor: 'red',
    },
    button: {
        marginTop: 20,
        padding: 6,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,

    },
    textbutton: {
        fontSize: 25,
        color: 'black',
        textAlign: 'center',

    },
    video: {
        flex: 1,
        //alignSelf: 'stretch',

        width: 300,
        height: 300,
        alignSelf: 'center',
    }
})

export default NewsInList