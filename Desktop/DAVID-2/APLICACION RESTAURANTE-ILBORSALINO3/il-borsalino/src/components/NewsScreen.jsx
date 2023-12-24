import { View, Text, StyleSheet, Dimensions } from "react-native";
import { React, Component } from "react";
import { ScrollView } from "react-native-gesture-handler";


import ScaledImage from './ScaledImage.jsx'

const { height, width } = Dimensions.get('window');



class NewsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
           loading: true,
           eventId: null,
           item: null,
       }
       }

    loadEverything(){   

    fetchNews = async () => {
        const res4 = await fetch('https://planetothebrain.com/ilborsalino/v1/novedades/' + this.props.route.params.eventId.toString() + '/')
        var jsonData4 = await res4.json()
        item = jsonData4
        this.setState({loading: false,  item: item})
    }
    fetchNews();
    }

    componentDidMount(){

        this.loadEverything();           

        }
    

    render(){
        return (
            <>{this.state.loading ? null :
            <ScrollView style={styles.scrollviewable}>
            <View style={styles.viewable}>
                <View><Text style={styles.textBold}>{this.state.item.title} </Text></View>
                <View><Text style={styles.text}>{this.state.item.readabledate} </Text></View>
                <View><Text style={styles.textDescription}>{this.state.item.description} </Text></View>
                {this.state.item.image? <ScaledImage uri={this.state.item.image_link} width={300} />: null}
            </View>
            </ScrollView>}
            </>    
        );
   
}
}


const styles = StyleSheet.create({
    parent: {
        flex: 1,

    },
    scrollviewable: {
        flex: 1,
        flexGrow: 1,
    },
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
    }

})

export default NewsScreen;
