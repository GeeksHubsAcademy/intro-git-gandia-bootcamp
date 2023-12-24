import { View, FlatList, StyleSheet } from 'react-native'
import React from "react";
import NewsInList from './NewsInList.jsx'


const NewsList = ({onlylastweek, noticias}) => {
    

    offersFilteredNoFuture = (noticias) => 
        noticias.filter(function(obj) {

        const dateOfOffer = obj.publishingdate;
        const [yof, Mof, dof] = dateOfOffer.match(/\d+/g);
        let startDateOfOfferStringFormatted = `${yof}-${Mof}-${dof}`
        let startDateOfOffer = new Date(startDateOfOfferStringFormatted)
        let startDateOfOfferInTime = startDateOfOffer.getTime()

        let date = new Date()
        currentDateInTime = new Date(date).getTime();


        return currentDateInTime > startDateOfOfferInTime
    
    })

    const sortByDate = (a, b) => {
        dateOfA = a.publishingdate;
        const [ya, Ma, da] = dateOfA.match(/\d+/g);
        startDateOfAStringFormatted = `${ya}-${Ma}-${da}`
        startDateOfA = new Date(startDateOfAStringFormatted)
        startDateOfAInTime = startDateOfA.getTime()

        dateOfB = b.publishingdate;
        const [yb, Mb, db] = dateOfB.match(/\d+/g);
        startDateOfBStringFormatted = `${yb}-${Mb}-${db}`
        startDateOfB = new Date(startDateOfBStringFormatted)
        startDateOfBInTime = startDateOfB.getTime()

        if (startDateOfBInTime !== startDateOfAInTime){
            return startDateOfBInTime - startDateOfAInTime

        } else {
           return b.id - a.id
        }



    }

    const handledNewsFiltered = (jsonData) => {
    
        return jsonData.filter(function(obj) {

let date = new Date()

let currentDay= String(date.getDate()).padStart(2, '0');

let currentMonth = String(date.getMonth()+1).padStart(2,"0");

let currentYear = date.getFullYear();

let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

let currentDateObject = new Date(date)


currentDateInTime = new Date(currentDate).getTime();
    
    const [y, M, d] = obj.publishingdate.match(/\d+/g);
    startDateStringFormatted = `${y}-${M}-${d}`

    startDate = new Date(startDateStringFormatted)
    day = currentDateObject.getDay()
    if (day == 0){
        realDay = 6
    }
    else {
        realDay = day - 1
    }

     beginningOfTheWeekReal = currentDateInTime - 1000*60*60*24*realDay

     finalOfTheWeek = currentDateInTime + 1000*60*60*24*(6-realDay)

    return (parseInt(beginningOfTheWeekReal, 10) <= parseInt(startDate.getTime(), 10)) && (parseInt(startDate.getTime(), 10) <= parseInt(finalOfTheWeek,10))
    })}

    const renderItem = ({item}) => {
        return <NewsInList offer={item}/>
    }

    if (onlylastweek === true){
        finalnoticias = noticias.sort(sortByDate)
        finalnoticias2 = offersFilteredNoFuture(finalnoticias)
        finalnoticias3 = handledNewsFiltered(finalnoticias2)
        
    } else {
        finalnoticias2 = noticias.sort(sortByDate)
        finalnoticias3 = offersFilteredNoFuture(finalnoticias2)
        
    }

    if (onlylastweek === true){
        return(
            
                <View style={styles.screen}>
                {finalnoticias3.map(offer => (<NewsInList key={offer.id} offer={offer}/>))} 
            
                </View>
        )

    } else {
        return ( 
            <View>
               <FlatList style={styles.screen}
                   data={finalnoticias3}
                   keyExtractor={item=>item.id}
                   //contentInset={{ bottom: news.length * 50 }}
                   //contentContainerStyle={{ paddingBottom: '90%' }}
                   renderItem={renderItem}
               
               />
        
            </View>
            )
    }
    

 }

 const styles = StyleSheet.create({
    screen: {
        //flex: 1,
        //flexGrow: 1,
        //paddingBottom: 300,
        paddingHorizontal: 15,
        backgroundColor: 'black',
    }
})
export default NewsList
