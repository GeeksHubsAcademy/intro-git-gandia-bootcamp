import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable, Platform} from "react-native";
import userinfo from '../data/userinfo.js'
import DateTimePicker from "@react-native-community/datetimepicker";
import DatePicker from "react-native-date-picker";






const MiInfo = () => {
    let [text, setText] = useState(userinfo.name)
    let [email, setEmail] = useState(userinfo.email)

    let [dateOfBirth, setDateOfBirth] = useState("");
    let [date, setDate] = useState(new Date())
    let [showPicker, setShowPicker] = useState(false);

    // const onChangePicker = ({type}, selectedDate) => {
    //     if (type == "set") {
    //         const currentDate = selectedDate;
    //         setDate(currentDate)

    //         if (Platform.OS === "android"){
    //             toggleDatePicker();
    //             setDateOfBirth(currentDate.toDateString());
    //         }

    //     } else {
    //         toggleDatePicker();
    //     }
    // }

    const toggleDatePicker = () => {
        setShowPicker(!showPicker);
    }

    const nombreGuardado = () => {
        Alert.alert('Tu nombre se ha guardado')
    }

    const emailGuardado = () => {
        Alert.alert('Tu email se ha registrado.', 'Se cambiará definitivamente cuando lo confirmes')
    }

    useEffect(() => {
       setText(userinfo.name)
       setEmail(userinfo.email)
    }, []);
    return ( 
        // Alert.alert('Test')
        
        
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
            <View>
                <Text style={styles.text}>Fecha de nacimiento (Opcional) </Text>

                <Pressable onPress={() => setShowPicker(true)}>

                <TextInput
                   style={styles.textinput}
                   placeholder="Tu día de nacimiento"
                   value={dateOfBirth}
                   onChangeText={setDateOfBirth}
                   placeholderTextColor='white'
                   editable={false}
                   onPressIn={toggleDatePicker}
                   />

                   <DatePicker
                   modal
                   open={showPicker}
                   date={date}
                   onConfirm={(date) => {
                    setShowPicker(false)
                    setDate(date)
                   }}
                   onCancel={() =>{
                    setShowPicker(false)}
                   }
                   />

                </Pressable>

                {/* <Pressable onPress={toggleDatePicker}>

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

                {showPicker && (<DateTimePicker mode="date"
                display="spinner"
                value={date}
                onChange={onChangePicker}
                maximumDate={new Date()}
                />)} */}
            
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
        
    }

})

