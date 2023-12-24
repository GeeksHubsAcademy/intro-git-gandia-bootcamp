//import offers from './offers.js'

export default offersFiltered = (offers) => offers.filter(function(obj) {
        
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


    //const substring = description.substr(0,90) + '\u2026'
    //console.log(currentDate.getTime())

//console.log("The current date is " + currentDate); 

    // const compareDates = (d1, d2) => {
    //     let date1 = new Date(d1).getTime();
    //     let date2 = new Date(d2).getTime();

    currentDateInTime = new Date(currentDateObject).getTime();
        
        const [M, d, y] = obj.startdate.match(/\d+/g);
        // console.log(M)
        // console.log(d)
        // console.log(y)
        startDateStringFormatted = `${y}-${M}-${d}`

        startDate = new Date(startDateStringFormatted)
        day = currentDateObject.getDay()
        if (day == 0){
            realDay = 6
        }
        else {
            realDay = day - 1
        }
        // console.log('full year', beginningOfTheWeek.getFullYear())
        // console.log(beginningOfTheWeek)
        
        // console.log(beginningOfTheWeek - 1000*60*60*24*realDay + ' is less than ' + currentDateInTime)
        // console.log('test')

        // console.log(parseInt(beginningOfTheWeek.getTime - 1000*60*60*24*realDay) <= parseInt(currentDateInTime))

        // console.log(parseInt(1690761600000) > parseInt(1690401351117))

        // console.log(parseInt(beginningOfTheWeek.getTime() - 1000*60*60*24*realDay, 10) > parseInt(currentDateInTime, 10))

        // console.log(parseInt(beginningOfTheWeek.getTime() - 1000*60*60*24*realDay) > parseInt(currentDateInTime))

         beginningOfTheWeekReal = currentDateInTime - 1000*60*60*24*realDay

         finalOfTheWeek = currentDateInTime + 1000*60*60*24*(6-realDay)

         console.log(currentDateInTime + '-' + startDate.getTime() + '-' + finalOfTheWeek + ' ')

         console.log('parseInt(beginningOfTheWeekReal, 10) < parseInt(startDate.getTime(), 10)', parseInt(beginningOfTheWeekReal, 10) < parseInt(startDate.getTime(), 10))

         console.log('parseInt(startDate.getTime(), 10) < parseInt(finalOfTheWeek,10)', parseInt(startDate.getTime(), 10) < parseInt(finalOfTheWeek,10))

        

        return (parseInt(beginningOfTheWeekReal, 10) < parseInt(startDate.getTime(), 10)) && (parseInt(startDate.getTime(), 10) < parseInt(finalOfTheWeek,10))
        })

    //console.log(offers_filtered)

    //console.log(offers_filtered)

    //export default offers_filtered