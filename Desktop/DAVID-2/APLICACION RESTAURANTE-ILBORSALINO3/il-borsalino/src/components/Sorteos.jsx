import React from "react";
import { StyleSheet, View, ScrollView } from 'react-native';
import SorteosList from './SorteosList'

const Sorteos = ({onlylastweek, sorteos}) => {
    Sorteos.defaultProps = {
        onlylastweek: false,
        sorteos: sorteos
      };

    if (onlylastweek == true){
    return (
        <View style={styles.screen}>
            <SorteosList onlylastweek={onlylastweek} sorteos={sorteos}/>
        </View>
    )
    } else {
    return (
        <ScrollView>
        <View style={styles.screen}>
            <SorteosList onlylastweek={onlylastweek} sorteos={sorteos}/>
        </View>
        </ScrollView>
    )
    }
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 15,
    },
    ofertas: {
        flexGrow: 1,
    },
    text: {
        color: 'white',
    }

})


export default Sorteos;