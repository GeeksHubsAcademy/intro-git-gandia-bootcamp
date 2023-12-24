
import { View, Text, StyleSheet } from "react-native";
import { Component } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ScaledImage from "./ScaledImage.jsx";
import { Alert } from "react-native";


class TrabajosScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
           loading: true,
           item: null,
       }
       }

    loadEverything(){   

    fetchJobs = async () => {
        const res4 = await fetch('https://planetothebrain.com/ilborsalino/v1/trabajos/' + this.props.route.params.eventId.toString() + '/')
        var jsonData4 = await res4.json()
        item = jsonData4
        this.setState({loading: false,  item: item})
    }
    fetchJobs();
    }

    determineIfActive = (offer) => {

    let date = new Date()
    let currentDateObject = new Date(date)

    const dateOfStart = offer.startdate;
    console.log('date of start is', dateOfStart)
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

    componentDidMount(){
        this.loadEverything();
        }
    

    render(){
        return (
        <>{this.state.loading ? null :  <ScrollView>
                <View style={styles.viewable}>
                <View><Text style={styles.textBold}>{item.title} </Text></View>
                <View><Text style={styles.text}>{item.readabledate} </Text></View>
                <View><Text style={styles.textDescription}>{item.description} </Text></View>
                {item.image ? <ScaledImage uri={item.image_link} width={300} /> : null}
                <TouchableOpacity style={styles.button} onPress={
                        ()=>{
                        Alert.alert('Has aplicado correctamente.', 'Si eres elegido te llamaremos :)')
                        }
                        }>
                            <Text style={styles.buttontext}>Aplicar</Text>
                        </TouchableOpacity >
                </View>
                </ScrollView>}</>
    
    
        );
   
}
}

const styles = StyleSheet.create({
    viewable: {
        padding: 20
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 10,
    },
    textDescription: {
        color: 'white',
        fontSize: 16,
        marginBottom: 30,
    },
    textBold: {
        fontSize: 28,
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
    },
    textActive: {
        marginTop: 20,
        color: 'green',
        fontSize: 35,
        textAlign: 'center',
    },
    textNotActive: {
        marginTop: 20,
        color: 'red',
        fontSize: 35,
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
        padding: 6,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
        
    },
    buttontext: {
        fontSize: 25,
        padding: 5,
        color: 'black',
        textAlign: 'center'        
    }

})

export default TrabajosScreen;