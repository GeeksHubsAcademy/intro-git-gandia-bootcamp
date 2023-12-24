import { StyleSheet, ScrollView } from 'react-native';
import TrabajosList from './TrabajosList'
import {React, Component } from "react";

class Trabajos extends Component {
    constructor(props) {
        super(props)
        this.state = {
           loading: true,
           trabajos: null,
       }
       }

    loadEverything(){   

    fetchTrabajos = async () => {
        const res4 = await fetch('https://planetothebrain.com/ilborsalino/v1/trabajos/')
        var jsonData4 = await res4.json()
        trabajos = jsonData4
        this.setState({loading: false, trabajos: trabajos})
    }
    fetchTrabajos();
    }

    componentDidMount(){
        this.loadEverything();
    }

    render(){
        return(<>{this.state.loading ? null : <ScrollView><TrabajosList trabajos={trabajos}/></ScrollView>}</>)
   
}

}
const styles = StyleSheet.create({
    ofertas: {
        flexGrow: 1,
    },
    text: {
        color: 'white',
    }

})
export default Trabajos;