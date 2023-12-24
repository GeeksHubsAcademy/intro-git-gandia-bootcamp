import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import ScaledImage from "./ScaledImage";




const OfferInList = ({offer}) => {

    const navigation = useNavigation()
    const description = offer.description
    const substring = description.substr(0,90) + '\u2026'

    const determineIfActive = (offer) => {

        let date = new Date()
        let currentDateObject = new Date(date)

        const dateOfStart = offer.startdate;
        const [ya, Ma, da] = dateOfStart.match(/\d+/g);
        const DateOfStartStringFormatted = `${ya}-${Ma}-${da}`
        const DateOfStart = new Date(DateOfStartStringFormatted)
        const DateOfStartInTime = DateOfStart.getTime()

        const dateOfFinnish = offer.finishdate;
        const [yb, Mb, db] = dateOfFinnish.match(/\d+/g);
        const DateOfFinnishStringFormatted = `${yb}-${Mb}-${db}`
        const DateOfFinnish = new Date(DateOfFinnishStringFormatted)
        const DateOfFinnishInTime = DateOfFinnish.getTime()

        if ((parseInt(DateOfStartInTime, 10) < parseInt(currentDateObject.getTime(), 10))&&(parseInt(currentDateObject.getTime(), 10) < parseInt(DateOfFinnishInTime))){
            return true
        } else {
            return false
        }


    }
    
    return(
        <View style={styles.card}>
            <View style={styles.almostinsidecard}>
                <View style={styles.insidecard}>
                    <View>
                    <Text style={styles.textBold}>{offer.title}</Text>
                    </View>
                    {offer.image ? <ScaledImage style={{marginTop: 20, marginBottom: 20}} uri={offer.image_link} width={300} /> : null}
                    <View>
                        <Text style={determineIfActive(offer) ? styles.textActive : styles.textNotActive}>{offer.readabledate}</Text>
                    </View>
                    
                    <View>
                    <Text style={styles.text}>{substring}</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={
                ()=>{
                navigation.navigate('Oferta/Promoción', {eventId: offer.id})
                }
                }>
                    <Text style={styles.textbutton}>Utilizar cupón</Text>
                </TouchableOpacity>
            </View>
        
        </View>

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
        color: 'white',

    },
    textActive: {
        color: 'green',

    },
    textNotActive: {
        color: 'red',

    },
    textBold: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center'

    },
    insidecard: {
        marginBottom: 20,

    },

    button: {
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

    }
})

export default OfferInList