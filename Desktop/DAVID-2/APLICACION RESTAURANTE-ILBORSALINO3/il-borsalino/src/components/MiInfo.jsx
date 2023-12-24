import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable, Platform} from "react-native";
import userinfo from '../data/userinfo.js'
import * as Device from 'expo-device';
import RNDateTimePicker from "@react-native-community/datetimepicker";






const MiInfo = () => {
    let [text, setText] = useState(userinfo.name)
    let [email, setEmail] = useState(userinfo.email)
    let [dateOfBirth, setDateOfBirth] = useState("");
    let datenow = new Date()

    let currentDay= String(datenow.getDate()).padStart(2, '0');

    let currentMonth = String(datenow.getMonth()+1).padStart(2,"0");

    let currentYear = datenow.getFullYear();

    let Year10YearsAgo = currentYear - 10

    let currentDate = `${Year10YearsAgo}-${currentMonth}-${currentDay}`;

    let currentDateObject = new Date(currentDate)


    let [date, setDate] = useState(currentDateObject)
    let [showPicker, setShowPicker] = useState(false);

    const confirmIOSDate = () => {
        let Day = String(date.getDate()).padStart(2, '0');
    
        let Month = String(date.getMonth()+1).padStart(2,"0");
    
        let Year = date.getFullYear();

        setDateOfBirth(`${Day}/${Month}/${Year}`)
        toggleDatePicker();
    }

    const onChangePicker = ({type}, selectedDate) => {
        if (type == "set") {
            const currentDate = selectedDate;
            setDate(currentDate)

            if (Device.osName === "Android"|| Platform.OS === "android"){

                let Day = String(currentDate.getDate()).padStart(2, '0');
                
            
                let Month = String(currentDate.getMonth()+1).padStart(2,"0");
                
            
                let Year = currentDate.getFullYear();
                

                toggleDatePicker();
                setDateOfBirth(`${Day}/${Month}/${Year}`);
            }

        } else {
            toggleDatePicker();
        }
    }

    const toggleDatePicker = () => {
        setShowPicker(!showPicker);
    }

    const nombreGuardado = () => {
        Alert.alert('Tu nombre se ha guardado')
    }

    const emailGuardado = () => {
        Alert.alert('Tu email se ha registrado.', 'Se cambiará definitivamente cuando lo confirmes')
    }

    const confirmarFechaGuardada = () => {
        Alert.alert('TU FECHA DE NACIMIENTO NO SE PODRÁ CAMBIAR DE NUEVO.', 'ESTO ES IMPORTANTE: ¿Estás seguro de que "' + dateOfBirth.toString() + '" es tu fecha de nacimiento exacta?' ,[
            {
              text: 'No, déjame cambiarla',
              style: 'cancel',
            },
            {text: 'Sí, lo es', 
            },
          ])

    }

    const fechaGuardada = () => {
        Alert.alert('Tu fecha de nacimiento no se podrá cambiar de nuevo.', '¿Estás seguro de que "' + dateOfBirth.toString() + '" es tu fecha de nacimiento exacta?' ,[
            {
              text: 'No, déjame cambiarla',
              style: 'cancel',
            },
            {text: 'Sí, lo es', 
            onPress: () => confirmarFechaGuardada(),
            },
          ])

    }

    useEffect(() => {
       setText(userinfo.name)
       setEmail(userinfo.email)
    }, []);
    return ( 
        
        
        <View style={styles.viewable}>
            
            <View style={styles.insideviewable}>
                <Text style={styles.text}>Nombre </Text>
                <TextInput style={styles.textinput} onChangeText={setText}
                value={text}
                />
                <TouchableOpacity onPress={nombreGuardado} style={styles.button}>
                    <Text style={styles.buttontext} >Guardar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.insideviewable}>
                <Text style={styles.text}>Fecha de nacimiento (Opcional) </Text>

                <Pressable onPress={toggleDatePicker}>

                <TextInput
                   style={styles.textinput}
                   placeholder="10/10/1910"
                   value={dateOfBirth}
                   onChangeText={setDateOfBirth}
                   placeholderTextColor='white'
                   editable={false}
                   onPressIn={toggleDatePicker}
                   />
                   </Pressable>

                {showPicker && (<RNDateTimePicker mode="date"
                display="spinner"
                value={date}
                onChange={onChangePicker}
                maximumDate={new Date()}
                dateFormat="day month year"
                style={styles.datePicker}
                textColor="white"
                />)}

                {showPicker && (Device.osName === "iOS" || Device.osName === "iPadOS"||Platform.OS === 'ios') && (<View style={{flexDirection: "row", justifyContent: "space-around"}}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontextCancel} onPress={toggleDatePicker}>Cancelar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontextConfirm} onPress={confirmIOSDate}>Confirmar</Text>
                    </TouchableOpacity>
                </View>)}



                {((Device.osName === "Android"||Platform.OS === 'android') || (!showPicker && (Device.osName === "iOS" || Device.osName === "iPadOS"||Platform.OS === 'ios'))) && (<TouchableOpacity onPress={fechaGuardada} style={styles.button}>
                    <Text style={styles.buttontext}>Guardar</Text>
                </TouchableOpacity>)}
            
            </View>

            <View>
                <Text style={styles.text}> Email </Text>
                <TextInput style={styles.textinput}onChangeText={setEmail}
                value={email}/>
                <TouchableOpacity onPress={emailGuardado} style={styles.button}>
                    <Text style={styles.buttontext}>Guardar</Text>
                </TouchableOpacity>
            </View>
        </View>
        
        );
}
 
export default MiInfo;

const styles = StyleSheet.create({
    viewable: {
        padding: 20
    },
    insideviewable: {
        marginBottom: 20,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 10,
    },
    textinput: {
        padding: 4,
        paddingHorizontal: 10,
        color: 'white',
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 10,

    },
    button: {
        borderColor: 'white',
        backgroundColor: 'white',
        borderWidth: 1,
        
    },
    buttontext: {
        padding: 5,
        color: 'black',
        textAlign: 'center'

        //borderColor: 'white',
        
    },
    buttontextConfirm: {
        padding: 5,
        color: 'green',
        textAlign: 'center'

        //borderColor: 'white',
        
    },
    buttontextCancel: {
        padding: 5,
        color: 'red',
        textAlign: 'center'

        //borderColor: 'white',
        
    },
     datePicker: {
         backgroundColor: 'black',
     }

})

