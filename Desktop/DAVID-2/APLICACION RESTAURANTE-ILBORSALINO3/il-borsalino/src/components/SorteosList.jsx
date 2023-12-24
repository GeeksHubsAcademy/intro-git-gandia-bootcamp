import SorteoInList from './SorteoInList'
import { StyleSheet } from 'react-native'
import { React, Component } from 'react'

class SorteosList extends Component {

    constructor(props) {
     super(props)
     this.state = {
        loading: true,
        finalsorteos: null,
    }
    }

    renderItem = ({item}) => {
        return <SorteoInList offer={item}/>
    }

    loadEverything(){

        var sorteosFiltered = (news) => news.filter(function(obj) {

            let date = new Date()
        
            let currentDay= String(date.getDate()).padStart(2, '0');
            let currentMonth = String(date.getMonth()+1).padStart(2,"0");
            let currentYear = String(date.getFullYear());
            let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
        
            var currentDateInTime = new Date(currentDate).getTime();
                
                const [ys, Ms, ds] = obj.startdate.match(/\d+/g);
                const [yf, Mf, df] = obj.finishdate.match(/\d+/g);

                startDateStringFormatted = `${ys}-${Ms}-${ds}`
                finnishDateStringFormatted = `${yf}-${Mf}-${df}`
        
                startDate = new Date(startDateStringFormatted)
                finnishDate = new Date(finnishDateStringFormatted)
        
                    beginning = startDate.getTime()
                    final = finnishDate.getTime()                
        
                return (parseInt(beginning, 10) <= parseInt(currentDateInTime, 10)) && (parseInt(currentDateInTime, 10) <= parseInt(final,10))
                })

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
         const [db, Mb, yb] = dateOfB.match(/\d+/g);
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

     if (this.onlylastweek == false){
                 finalsorteos = offersFilteredNoFuture(this.props.sorteos)
                 finalsorteos2 = finalsorteos.sort(sortByDate)
                 this.setState({loading: false, finalsorteos: finalsorteos2})
     } else {
        finalsorteos = sorteosFiltered(this.props.sorteos)
        finalsorteos2 = offersFilteredNoFuture(finalsorteos)
        finalsorteos3 = finalsorteos.sort(sortByDate)
        this.setState({loading: false, finalsorteos: finalsorteos3})
     }
            
    }

    componentDidMount(){
        this.loadEverything();
    }

    render(){
        return(<>{this.state.loading ? null :this.state.finalsorteos.map(offer => (<SorteoInList key={offer.id} offer={offer}/>))}</>)   
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


export default SorteosList
