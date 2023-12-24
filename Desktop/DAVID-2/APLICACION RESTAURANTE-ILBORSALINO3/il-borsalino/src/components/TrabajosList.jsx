import { View, FlatList } from 'react-native'
import TrabajosInList from './TrabajosInList'
import { StyleSheet } from 'react-native'
import { React, Component} from 'react'


class TrabajosList extends Component {

    constructor(props) {
     super(props)
     this.state = {
        loading: true,
        finaltrabajos: null,
    }
    }

    renderItem = ({item}) => {
        return <TrabajosInList offer={item}/>
    }

    loadEverything(){
    var offersFilteredNoFuture = (offers) => offers.filter(function(obj) {

        const dateOfOffer = obj.startdate;
        const [yof, Mof, dof] = dateOfOffer.match(/\d+/g);
        let startDateOfOfferStringFormatted = `${yof}-${Mof}-${dof}`
        let startDateOfOffer = new Date(startDateOfOfferStringFormatted)
        let startDateOfOfferInTime = startDateOfOffer.getTime()

        let date = new Date()
        currentDateInTime = new Date(date).getTime();

        return currentDateInTime > startDateOfOfferInTime

    })

    const sortByDate = (a, b) => {
         let dateOfA = a.startdate;
         const [ya, Ma, da] = dateOfA.match(/\d+/g);
         let startDateOfAStringFormatted = `${ya}-${Ma}-${da}`
         let startDateOfA = new Date(startDateOfAStringFormatted)
         let startDateOfAInTime = startDateOfA.getTime()

         let dateOfB = b.startdate;
         const [yb, Mb, db] = dateOfB.match(/\d+/g);
         let startDateOfBStringFormatted = `${yb}-${Mb}-${db}`
         let startDateOfB = new Date(startDateOfBStringFormatted)
         let startDateOfBInTime = startDateOfB.getTime()

         if (startDateOfAInTime !== startDateOfBInTime){
         return startDateOfBInTime - startDateOfAInTime
         }
         else {

             finnishOfA = a.finishdate;
             const [yaf, Maf, daf] = finnishOfA.match(/\d+/g);
             finnishDateOfAStringFormatted = `${yaf}-${Maf}-${daf}`
             finnishDateOfA = new Date(finnishDateOfAStringFormatted)
             finnishDateOfAInTime = finnishDateOfA.getTime()
    
             finnishOfB = b.finishdate;
             const [ybf, Mbf, dbf] = finnishOfB.match(/\d+/g);
             finnishDateOfBStringFormatted = `${ybf}-${Mbf}-${dbf}`
             finnishDateOfB = new Date(finnishDateOfBStringFormatted)
             finnishDateOfBInTime = finnishDateOfB.getTime()

             return finnishDateOfBInTime - finnishDateOfAInTime

         }
     }
                 finaltrabajos = offersFilteredNoFuture(this.props.trabajos)
                 finaltrabajos2 = finaltrabajos.sort(sortByDate)
                 this.setState({loading: false, finaltrabajos: finaltrabajos2})
            
    }

    componentDidMount(){
        this.loadEverything();
    }
    render(){
        return(<View style={styles.screen}>{this.state.loading ? null :this.state.finaltrabajos.map(offer => (<TrabajosInList key={offer.id} offer={offer}/>))}</View>) 
}
}

 
 const styles = StyleSheet.create({
     screen: {
         paddingHorizontal: 15,
         backgroundColor: 'black',
     },
     text: {
         color: 'white',
     }
 })

export default TrabajosList
