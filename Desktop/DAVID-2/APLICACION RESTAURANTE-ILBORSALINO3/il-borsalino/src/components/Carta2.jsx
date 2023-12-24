// import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
// //import { fetchEntrantes } from './apiCall.jsx'
// //import { Component } from "react";

// import React, { useEffect, useState } from 'react'



// export default function Carta() {
//     const [menuCarta, setMenuCarta] = useState({ entrantes: [], sartenes: [] })
//     const [entrantes, setEntrantes] = useState([])

//     var fetchEntrantes = async () => {
//         var res = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=entrantes')
//         //console.log(res)
//         var jsonData = await res.json()
//         console.log('jsonData', jsonData)
//         return jsonData

//     }


//     useEffect(() => {
//         fetchEntrantes().then((entrantes) => {
//             console.log('entrantesResult', entrantes)
//             arrayEntrantes = []
//             for(i=0; i<entrantes.length; i++){
//                 console.log(entrantes[i])
//                 arrayEntrantes.push(entrantes[i])
//             }
//             let entrantes2 = [entrantes]
//             setMenuCarta((prevState) => ({
//                 // ...prevState, ['entrantes']: JSON.stringify(entrantes)
//                 ...prevState, ['entrantes']: arrayEntrantes
//             }))
//         })}, [])

//     useEffect(() => {

//         //fetchEntrantes().then((entrantes) => )

//         fetchEntrantes().then((entrantes) => {
//             console.log('entrantes', entrantes)
//             setEntrantes(entrantes)
//             //})
//         }
//         )



//     }, [])
//     return (<>
//         {menuCarta.entrantes.length == 0 ? (null) :
//             (<ScrollView>
//                 <View style={styles.screen}>
//                      <Text style={styles.textBold}>Entrantes
//                      </Text>
                     
//                     {menuCarta.entrantes.map(entrante => (
//                         <View style={styles.card} key={entrante.id}>
//                             <Text style={styles.text}>{entrante.dish}</Text>
//                             <Text style={styles.text}>{entrante.price} €</Text>
//                         </View>
//                     ))} 
//                 </View>
//             </ScrollView>)
//         }</>)
// }


// // class Carta extends Component {
// //     constructor(props) {
// //         super(props)
// //         this.state = {
// //            loading: true,
// //            entrantes: null,
// //            sartenes: null,
// //            ensaladas: null,
// //            carnes: null,
// //            pescados: null,
// //            pastas: null,
// //            pizzas: null,
// //            risottos: null,
// //            veganeandos: null,
// //        }
// //        }

// //        loadEverything(){

// //         fetchEntrantes = async () => {
// //             const res1 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=entrantes')
// //             var jsonData1 = await res1.json()
// //             entrantes = jsonData1
// //             //console.log(entrantes)
// //             this.setState({entrantes: entrantes})

// //         }
// //         fetchSartenes = async () => {
// //             const res2 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=sartenes')
// //             var jsonData2 = await res2.json()
// //             sartenes = jsonData2
// //             this.setState({sartenes: sartenes})

// //         }
// //         fetchEnsaladas = async () => {
// //             const res3 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=ensaladas')
// //             var jsonData3 = await res3.json()
// //             ensaladas = jsonData3
// //             this.setState({ensaladas: ensaladas})

// //         }
// //         fetchCarnes = async () => {
// //             const res4 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=carnes')
// //             var jsonData4 = await res4.json()
// //             carnes = jsonData4
// //             this.setState({carnes: carnes})

// //         }
// //         fetchPescados = async () => {
// //             const res5 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=pescados')
// //             var jsonData5 = await res5.json()
// //             pescados = jsonData5
// //             this.setState({pescados: pescados})

// //         }
// //         fetchPastas = async () => {
// //             const res6 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=pastas')
// //             var jsonData6 = await res6.json()
// //             pastas = jsonData6
// //             this.setState({pastas: pastas})

// //         }
// //         fetchPizzas = async () => {
// //             const res7 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=pizzas')
// //             var jsonData7 = await res7.json()
// //             pizzas = jsonData7
// //             this.setState({pizzas: pizzas})

// //         }
// //         fetchRisottos = async () => {
// //             const res8 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=risottos')
// //             var jsonData8 = await res8.json()
// //             risottos = jsonData8
// //             this.setState({risottos: risottos})

// //         }
// //         fetchVeganeandos = async () => {
// //             const res9 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=veganeando')
// //             var jsonData9 = await res9.json()
// //             veganeandos = await jsonData9

// //             // await this.setState({veganeandos: veganeandos})
// //             // console.log(veganeandos)
// //             this.setState({veganeandos: veganeandos, loading: false})


// //         }


// //         fetchEntrantes();
// //         fetchSartenes();
// //         fetchEnsaladas();
// //         fetchCarnes();
// //         fetchPescados();
// //         fetchPastas();
// //         fetchPizzas();
// //         fetchRisottos();
// //         fetchVeganeandos();
// //         }

// //         componentDidMount(){
// //             this.loadEverything();

// //             }

// //     render(){
// //         return ( <>{this.state.loading ? null : 
// //         <ScrollView>
// //          <View style={styles.screen}>
// //             <Text style={styles.textBold}>Entrantes</Text>
// //              {this.state.entrantes.map(entrante => (
// //                  <View style={styles.card} key={entrante.id}>
// //                      <Text style={styles.text}>{entrante.dish}</Text>
// //                      <Text style={styles.text}>{entrante.price} €</Text>
// //                  </View>
// //             ))}
// //         </View>

// //         <View style={styles.screen}>
// //             <Text style={styles.textBold}>Sartenes</Text>
// //              {this.state.sartenes.map(entrante => (
// //                  <View style={styles.card} key={entrante.id}>
// //                      <Text style={styles.text}>{entrante.dish}</Text>
// //                      <Text style={styles.text}>{entrante.price} €</Text>
// //                  </View>
// //             ))}
// //         </View>

// //         <View style={styles.screen}>
// //             <Text style={styles.textBold}>Ensaladas</Text>
// //              {this.state.ensaladas.map(entrante => (
// //                  <View style={styles.card} key={entrante.id}>
// //                      <Text style={styles.text}>{entrante.dish}</Text>
// //                      <Text style={styles.text}>{entrante.description}</Text>
// //                      <Text style={styles.text}>{entrante.price} €</Text>
// //                  </View>
// //             ))}
// //         </View>

// //         <View style={styles.screen}>
// //             <Text style={styles.textBold}>Carnes</Text>
// //              {this.state.carnes.map(entrante => (
// //                  <View style={styles.card} key={entrante.id}>
// //                      <Text style={styles.text}>{entrante.dish}</Text>
// //                      <Text style={styles.text}>{entrante.price} €</Text>
// //                  </View>
// //             ))}
// //         </View>

// //         <View style={styles.screen}>
// //             <Text style={styles.textBold}>Pescados</Text>
// //              {this.state.pescados.map(entrante => (
// //                  <View style={styles.card} key={entrante.id}>
// //                      <Text style={styles.text}>{entrante.dish}</Text>
// //                      <Text style={styles.text}>{entrante.price} €</Text>
// //                  </View>
// //             ))}
// //         </View>

// //         <View style={styles.screen}>
// //             <Text style={styles.textBold}>Pastas</Text>
// //              {this.state.sartenes.map(entrante => (
// //                  <View style={styles.card} key={entrante.id}>
// //                      <Text style={styles.text}>{entrante.dish}</Text>
// //                      <Text style={styles.text}>{entrante.price} €</Text>
// //                  </View>
// //             ))}
// //         </View>

// //         <View style={styles.screen}>
// //             <Text style={styles.textBold}>Pizzas</Text>
// //              {this.state.pizzas.map(entrante => (
// //                  <View style={styles.card} key={entrante.id}>
// //                      <Text style={styles.text}>{entrante.dish}</Text>
// //                      <Text style={styles.text}>{entrante.description}</Text>
// //                      <Text style={styles.text}>{entrante.price} €</Text>
// //                  </View>
// //             ))}
// //         </View>

// //         <View style={styles.screen}>
// //             <Text style={styles.textBold}>Risottos</Text>
// //              {this.state.risottos.map(entrante => (
// //                  <View style={styles.card} key={entrante.id}>
// //                      <Text style={styles.text}>{entrante.dish}</Text>
// //                      <Text style={styles.text}>{entrante.price} €</Text>
// //                  </View>
// //             ))}
// //         </View>

// //         <View style={styles.screen}>
// //             <Text style={styles.textBold}>Veganeando</Text>
// //              {this.state.veganeandos.map(entrante => (
// //                  <View style={styles.card} key={entrante.id}>
// //                      <Text style={styles.text}>{entrante.dish}</Text>
// //                      <Text style={styles.text}>{entrante.price} €</Text>
// //                  </View>
// //             ))}
// //         </View>
// //         </ScrollView>}</>
// //         )
// //     }
// // }


// const styles = StyleSheet.create({
//     text: {
//         color: 'white',
//         textAlign: 'center',
//     },
//     screen: {
//         //flex: 1,
//         //flexGrow: 1,
//         //paddingBottom: 300,
//         paddingHorizontal: 15,
//         backgroundColor: 'black',
//     },
//     card: {
//         flexDirection: 'column',
//         justifyContent: 'center',
//         minHeight: 150,
//         marginTop: 10,
//         padding: 15,
//         backgroundColor: 'black',
//         borderWidth: 1,
//         borderColor: 'white',
//         borderRadius: 30,
//     },
//     textBoldFirst: {
//         color: 'white',
//         fontSize: 25,
//         textAlign: 'center',

//     },
//     textBold: {
//         color: 'white',
//         fontSize: 25,
//         textAlign: 'center',
//         marginTop: 15,
//     }
// })
// //export default Carta