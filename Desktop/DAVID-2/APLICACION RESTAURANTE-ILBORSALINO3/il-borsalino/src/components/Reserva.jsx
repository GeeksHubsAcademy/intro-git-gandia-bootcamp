import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

function Reserva() {
    return (
        <View style={styles.container}>


            <TouchableOpacity style={styles.reservation}>
                <Text style={styles.reservationtext}>Reserva tu mesa</Text>
            </TouchableOpacity>


            <View style={styles.container2}>
            <Text style={{ color: 'white' }}>Aquí podrás ver las reservas activas.
            </Text>



            </View>





        </View>

    )
}

export default Reserva

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column-reverse',
        justifyContent: 'flex-start',
        flex: 1
        // position: 'absolute',
        // bottom: 0
    },
    reservation: {
        backgroundColor: 'white',
        padding: 15,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
        margin: 15,

    },
    reservationtext: {
        color: 'black',
        textAlign: 'center'
    },
    container2: {
        flexGrow: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    }
})