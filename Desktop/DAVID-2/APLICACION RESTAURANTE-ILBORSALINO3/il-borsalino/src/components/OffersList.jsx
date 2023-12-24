import { View,  FlatList } from 'react-native'
import OfferInList from '../components/OfferInList'
import { StyleSheet } from 'react-native'

const OffersList = ({onlylastweek, ofertas}) => {


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

            let finnishOfA = a.finishdate;
            const [yaf, Maf, daf] = finnishOfA.match(/\d+/g);
            let finnishDateOfAStringFormatted = `${yaf}-${Maf}-${daf}`
            let finnishDateOfA = new Date(finnishDateOfAStringFormatted)
            let finnishDateOfAInTime = finnishDateOfA.getTime()
    
            let finnishOfB = b.finishdate;
            const [ybf, Mbf, dbf] = finnishOfB.match(/\d+/g);
            let finnishDateOfBStringFormatted = `${ybf}-${Mbf}-${dbf}`
            let finnishDateOfB = new Date(finnishDateOfBStringFormatted)
            let finnishDateOfBInTime = finnishDateOfB.getTime()

            return finnishDateOfBInTime - finnishDateOfAInTime

        }
    }

    offersFiltered = (offers) => offers.filter(function(obj) {
        
        let date = new Date()
        
        let currentDay= String(date.getDate()).padStart(2, '0');
    
        let currentMonth = String(date.getMonth()+1).padStart(2,"0");
    
        let currentYear = date.getFullYear();
    
        let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
    
        let currentDateObject = new Date(currentDate)
    
        currentDateInTime = currentDateObject.getTime();
            
            const [ys, Ms, ds] = obj.startdate.match(/\d+/g);

            startDateStringFormatted = `${ys}-${Ms}-${ds}`

            const [yf, Mf, df] = obj.finishdate.match(/\d+/g);

            finishDateStringFormatted = `${yf}-${Mf}-${df}`
    
            startDate = new Date(startDateStringFormatted)
            finishDate = new Date(finishDateStringFormatted)
            day = currentDateObject.getDay()
            if (day == 0){
                realDay = 6
            }
            else {
                realDay = day - 1
            }
             beginningOfTheWeekReal = currentDateInTime - 1000*60*60*24*realDay
    
             finalOfTheWeek = currentDateInTime + 1000*60*60*24*(6-realDay)
    
            return (parseInt(beginningOfTheWeekReal, 10) <= parseInt(startDate.getTime(), 10)) || (parseInt(finishDate.getTime(), 10) >= parseInt(finalOfTheWeek,10))
            })



    if (onlylastweek === true){
        
        finaloffers = offersFiltered(ofertas)
        finaloffers2 = finaloffers.sort(sortByDate)
        finaloffers3 = offersFilteredNoFuture(finaloffers2)
        
    } else {
    
        finaloffers = ofertas
        finaloffers2 = finaloffers.sort(sortByDate)
        finaloffers3 = offersFilteredNoFuture(finaloffers2)
        
    }

    const renderItem = ({item}) => {
        return <OfferInList offer={item}/>
    }
    if (onlylastweek === true){
        return ( 
            <View style={styles.screen}>
            {finaloffers3.map(offer => (<OfferInList key={offer.id} offer={offer}/>))} 
        
            </View>
            )
    } else {    
     return ( 
     <View>
        <FlatList style={styles.screen}
            data={finaloffers3}
            keyExtractor={item=>item.id}
            renderItem={renderItem}
        />
     </View>
     )
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


export default OffersList
