import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Text, StyleSheet, Button} from "react-native";
import Noticias from './Noticias.jsx'
import Ofertas from './Ofertas.jsx'
import offers from '../data/offers.js' 
const Main = () => {
    const navigation = useNavigation()

    let date = new Date()
    // console.log(date)

    // let currentDay= String(date.getDate()).padStart(2, '0');
    // console.log(currentDay)

    // let currentMonth = String(date.getMonth()+1).padStart(2,"0");
    // console.log(currentMonth)

    // let currentYear = date.getFullYear();
    // console.log(currentYear)

    // we will display the date as DD-MM-YYYY 

    //let currentDate = `${currentMonth}/${currentDay}/${currentYear}`;

    currentDateObject = new Date(date)
    console.log(currentDateObject)
    //console.log(currentDate.getTime())

//console.log("The current date is " + currentDate); 

    // const compareDates = (d1, d2) => {
    //     let date1 = new Date(d1).getTime();
    //     let date2 = new Date(d2).getTime();

    currentDateInTime = new Date(currentDateObject).getTime();

    offers_filtered = offers.filter(function(obj) {
        
        const [M, d, y] = obj.startdate.match(/\d+/g);
        // console.log(M)
        // console.log(d)
        // console.log(y)
        startDateStringFormatted = `${y}-${M}-${d}`

        beginningOfTheWeek = new Date(startDateStringFormatted)
        day = beginningOfTheWeek.getDay()
        if (day == 0){
            realDay = 6
        }
        else {
            realDay = day - 1
        }
        // console.log('full year', beginningOfTheWeek.getFullYear())
        // console.log(beginningOfTheWeek)
        
        console.log(beginningOfTheWeek - 1000*60*60*24*realDay + ' is less than ' + currentDateInTime)
        // console.log('test')

        console.log(parseInt(beginningOfTheWeek.getTime - 1000*60*60*24*realDay) <= parseInt(currentDateInTime))

        return parseInt(beginningOfTheWeek.getTime - 1000*60*60*24*realDay, 10) <= parseInt(currentDateInTime, 10)
        }).map(function(obj) { return obj });

    console.log(offers_filtered)

    return ( 
        // <ScrollView>
        // <View style={styles.screen}>
        //     <Text style={styles.text}>¡Entra en novedades u ofertas para estar al día de lo que podemos ofrecerte!</Text>
        // </View>
        // </ScrollView>
        <>
        <View><Text style={styles.text}>Ofertas de esta semana</Text></View>
        {offers_filtered.map(offer => (
<View key={offer.id}style={styles.card}>
            <View style={styles.almostinsidecard}>
                <View style={styles.insidecard}>
                    <View>
                    <Text style={styles.textBold}>{offer.title}</Text>
                    </View>
                    <View>
                        <Text style={offer.active ? styles.textActive : styles.textNotActive}>{offer.date}</Text>
                    </View>
                    
                    {/* {offer.codeneeded ? <View><Text>{offer.code}</Text></View> : null}           */}
                    
                    <View>
                    <Text style={styles.text}>{substring}</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={
                ()=>{

                //navigation.navigate('News', {eventId: offer.id})

                //console.log(navigation.navigate('News', {eventId: offer.id}))

                navigation.navigate('Oferta/Promoción', {eventId: offer.id})

                //console.log(navigation.navigate('Novedades'))
                }
                }>
                    <Text style={styles.textbutton}>Utilizar cupón</Text>
                </TouchableOpacity>
            </View>
        
        </View>))}

        
        </>
     );
};

// const styles = StyleSheet.create({
//     screen: {
//         padding: 15,
//         backgroundColor: 'black'
//     },
//     text: {
//         color: 'white'
//     }
// })

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
        padding: 15,
        textAlign: 'center'

    },
    textActive: {
        color: 'green',

    },
    textNotActive: {
        color: 'red',

    },
    textBold: {
        color: '#09DECB',
        fontSize: 25,

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

export default Main;