import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import Noticias from './Noticias.jsx'
import Ofertas from './Ofertas.jsx'
import Sorteos from './Sorteos.jsx'
import { useNavigation } from "@react-navigation/native";

const Main = () => {
    const [noticias, setNoticias] = useState(null)
    const [ofertas, setOfertas] = useState(null)
    const [sorteos, setSorteos] = useState(null)

    useEffect(() => {
        fetchNoticias();
        fetchOfertas();
        fetchSorteos();
    }, [])

    const navigation = useNavigation();

    fetchNoticias = async () => {
        const res = await fetch('https://planetothebrain.com/ilborsalino/v1/novedades/')
        var jsonData = await res.json()
        setNoticias(jsonData)
    }

    fetchOfertas = async () => {
        const res2 = await fetch('https://planetothebrain.com/ilborsalino/v1/ofertas/')
        var jsonData2 = await res2.json()
        setOfertas(jsonData2)
    }

    fetchSorteos = async () => {
        const res3 = await fetch('https://planetothebrain.com/ilborsalino/v1/sorteos/')
        var jsonData3 = await res3.json()
        setSorteos(jsonData3)
    }
    return ( 

        <>
        <ScrollView>
        <View>
            <Text style={styles.text}>Ofertas de esta semana</Text>
            {(ofertas != null && ofertas != undefined) ? <Ofertas onlylastweek={true} ofertas={ofertas} />: null}
            <Text style={styles.text}>Novedades de esta semana</Text>
            { (noticias != null && noticias != undefined) ? <Noticias onlylastweek={true} noticias={noticias} />: null}
            <Text style={styles.text}>Sorteos activos</Text>
            { (sorteos != null && sorteos != undefined) ? <Sorteos onlylastweek={true} sorteos={sorteos} />: null}
        </View>
        </ScrollView>
        </>
     );
};



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
        textAlign: 'center',
        fontSize: 20

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

    },

})

export default Main;