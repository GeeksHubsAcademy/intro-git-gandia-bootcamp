import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
//import { fetchEntrantes } from './apiCall.jsx'
import { Component } from "react";

import React, { useEffect, useState } from 'react'

import ScaledImage from './ScaledImage.jsx'



// export default function Carta() {
//     const [menuCarta, setMenuCarta] = useState({ entrantes: [], sartenes: [], ensaladas: [], carnes: [], pescados: [], pastas: [], pizzas: [], risottos: [], veganeandos: [] })
//     // const [entrantes, setEntrantes] = useState([])

//     var fetchEntrantes = async () => {
//         var res = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=entrantes')
//         //console.log(res)
//         var jsonData = await res.json()
//         console.log('entrantes', jsonData)
//         return jsonData

//     }

//     var fetchEnsaladas = async () => {
//         const res3 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=ensaladas')
//         var jsonData3 = await res3.json()
//         console.log('jsonData', jsonData3)
//         return jsonData3

//     }

//     var fetchSartenes = async () => {
//         const res2 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=sartenes')
//         var jsonData2 = await res2.json()
//         console.log('sartenes', jsonData2)
//         return jsonData2

//     }

//     var fetchCarnes = async () => {
//         const res4 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=carnes')
//         var jsonData4 = await res4.json()
//         console.log('carnes', jsonData4)
//         return jsonData4

//     }
//     var fetchPescados = async () => {
//         const res5 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=pescados')
//         var jsonData5 = await res5.json()
//         console.log('pescados', jsonData5)
//         return jsonData5

//     }
//     var fetchPasta = async () => {
//         const res6 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=pastas')
//         var jsonData6 = await res6.json()
//         console.log('pastas', jsonData6)
//         return jsonData6

//     }
//     var fetchPizza = async () => {
//         const res7 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=pizzas')
//         var jsonData7 = await res7.json()
//         console.log('pizzas', jsonData7)
//         return jsonData7

//     }
//     var fetchRisotto = async () => {
//         const res8 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=risottos')
//         var jsonData8 = await res8.json()
//         console.log('risottos', jsonData8)
//         return jsonData8

//     }
//     var fetchVeganeando = async () => {
//         const res9 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=veganeando')
//         var jsonData9 = await res9.json()
//         console.log('veganeando', jsonData9)
//         return await jsonData9

//         // await this.setState({veganeandos: veganeandos})
//         // console.log(veganeandos)


//     }


//     useEffect(() => {

//         const allPromises = [
//             fetchEntrantes(),
//             fetchEnsaladas(),
//             fetchSartenes(),
//             fetchCarnes(),
//             fetchPescados(),
//             fetchPasta(),
//             fetchPizza(),
//             fetchRisotto(),
//             fetchVeganeando(),
//         ];
//         Promise.all(allPromises).then((
//             [
//                 entrantes,
//                 ensaladas,
//                 sartenes,
//                 carnes,
//                 pescados,
//                 pastas,
//                 pizzas,
//                 risottos,
//                 veganeandos

//             ]
//         ) => {

//             setMenuCarta((prevState) => ({
//                 ...prevState,
//                 // ['entrantes']: entrantes,
//                 // entrantes: entrantes,
//                 entrantes,
//                 ensaladas,
//                 sartenes,
//                 carnes,
//                 pescados,
//                 pastas,
//                 pizzas,
//                 risottos,
//                 veganeandos
//             }))
//         })
//     }, []);

//     // useEffect(() => {

//     //     //fetchEntrantes().then((entrantes) => )

//     //     fetchEntrantes().then((entrantes) => {
//     //         console.log('entrantes', entrantes)
//     //         setEntrantes(entrantes)
//     //         //})
//     //     }
//     //     )



//     // }, [])
//     return (<>{ <ScrollView>


//         {menuCarta.entrantes.length === 0 ? (null) :
//             (
//                 <View style={styles.screen}>
//                     <Text style={styles.textBold}>Entrantes
//                     </Text>

//                     {menuCarta.entrantes.map(entrante => (
//                         <View style={styles.card} key={entrante.id}>
//                             {entrante.image_link ? <ScaledImage style={{ marginTop: 20, marginBottom: 20 }} uri={entrante.image_link} width={300} /> : null}
//                             <Text style={styles.text}>{entrante.dish}</Text>
//                             <Text style={styles.text}>{entrante.price} €</Text>
//                         </View>
//                     ))}
//                 </View>
//             )
//         }

//         {menuCarta.sartenes.length === 0 ? (null) :
//             (
//                 <View style={styles.screen}>
//                     <Text style={styles.textBold}>Sartenes</Text>
//                     {menuCarta.sartenes.map(entrante => (
//                         <View style={styles.card} key={entrante.id}>
//                             {entrante.image_link ? <ScaledImage style={{ marginTop: 20, marginBottom: 20 }} uri={entrante.image_link} width={300} /> : null}
//                             <Text style={styles.text}>{entrante.dish}</Text>
//                             <Text style={styles.text}>{entrante.price} €</Text>
//                         </View>
//                     ))}
//                 </View>)}



//         {menuCarta.ensaladas.length === 0 ? (null) :
//             (

//                 <View style={styles.screen}>
//                     <Text style={styles.textBold}>Ensaladas</Text>
//                     {menuCarta.ensaladas.map(entrante => (
//                         <View style={styles.card} key={entrante.id}>
//                             {entrante.image_link ? <ScaledImage style={{ marginTop: 20, marginBottom: 20 }} uri={entrante.image_link} width={300} /> : null}
//                             <Text style={styles.text}>{entrante.dish}</Text>
//                             <Text style={styles.text}>{entrante.description}</Text>
//                             <Text style={styles.text}>{entrante.price} €</Text>
//                         </View>
//                     ))}
//                 </View>)
//         }


//         {menuCarta.carnes.length === 0 ? (null) :
//             (

//                 <View style={styles.screen}>
//                     <Text style={styles.textBold}>Carnes</Text>
//                     {menuCarta.carnes.map(entrante => (
//                         <View style={styles.card} key={entrante.id}>
//                             {entrante.image_link ? <ScaledImage style={{ marginTop: 20, marginBottom: 20 }} uri={entrante.image_link} width={300} /> : null}
//                             <Text style={styles.text}>{entrante.dish}</Text>
//                             <Text style={styles.text}>{entrante.price} €</Text>
//                         </View>
//                     ))}
//                 </View>)}




//         {menuCarta.pescados.length === 0 ? (null) :
//             (

//                 <View style={styles.screen}>
//                     <Text style={styles.textBold}>Pescados</Text>
//                     {menuCarta.pescados.map(entrante => (
//                         <View style={styles.card} key={entrante.id}>
//                             {entrante.image_link ? <ScaledImage style={{ marginTop: 20, marginBottom: 20 }} uri={entrante.image_link} width={300} /> : null}
//                             <Text style={styles.text}>{entrante.dish}</Text>
//                             <Text style={styles.text}>{entrante.price} €</Text>
//                         </View>
//                     ))}
//                 </View>)}


//         {menuCarta.pastas.length === 0 ? (null) :
//             (
//                 <View style={styles.screen}>
//                     <Text style={styles.textBold}>Pastas</Text>
//                     {menuCarta.pastas.map(entrante => (
//                         <View style={styles.card} key={entrante.id}>
//                             {entrante.image_link ? <ScaledImage style={{ marginTop: 20, marginBottom: 20 }} uri={entrante.image_link} width={300} /> : null}
//                             <Text style={styles.text}>{entrante.dish}</Text>
//                             <Text style={styles.text}>{entrante.price} €</Text>
//                         </View>
//                     ))}
//                 </View>)}



//         {menuCarta.pizzas.length === 0 ? (null) :
//             (

//                 <View style={styles.screen}>
//                     <Text style={styles.textBold}>Pizzas</Text>
//                     {menuCarta.pizzas.map(entrante => (
//                         <View style={styles.card} key={entrante.id}>
//                             {entrante.image_link ? <ScaledImage style={{ marginTop: 20, marginBottom: 20 }} uri={entrante.image_link} width={300} /> : null}
//                             <Text style={styles.text}>{entrante.dish}</Text>
//                             <Text style={styles.text}>{entrante.description}</Text>
//                             <Text style={styles.text}>{entrante.price} €</Text>
//                         </View>
//                     ))}
//                 </View>)}


//         {menuCarta.risottos.length === 0 ? (null) :
//             (
//                 <View style={styles.screen}>
//                     <Text style={styles.textBold}>Risottos</Text>
//                     {menuCarta.risottos.map(entrante => (
//                         <View style={styles.card} key={entrante.id}>
//                             {entrante.image_link ? <ScaledImage style={{ marginTop: 20, marginBottom: 20 }} uri={entrante.image_link} width={300} /> : null}
//                             <Text style={styles.text}>{entrante.dish}</Text>
//                             <Text style={styles.text}>{entrante.price} €</Text>
//                         </View>
//                     ))}
//                 </View>)}



//         {menuCarta.veganeandos.length === 0 ? (null) : (

//             <View style={styles.screen}>
//                 <Text style={styles.textBold}>Veganeando</Text>
//                 {menuCarta.veganeandos.map(entrante => (
//                     <View style={styles.card} key={entrante.id}>
//                         {entrante.image_link ? <ScaledImage style={{ marginTop: 20, marginBottom: 20 }} uri={entrante.image_link} width={300} /> : null}
//                         <Text style={styles.text}>{entrante.dish}</Text>
//                         <Text style={styles.text}>{entrante.price} €</Text>
//                     </View>
//                 ))}
//             </View>)}
//     </ScrollView>}</>)
// }


class Carta extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            entrantes: null,
            sartenes: null,
            ensaladas: null,
            carnes: null,
            pescados: null,
            pastas: null,
            pizzas: null,
            risottos: null,
            veganeandos: null,
        }
    }

    async loadEverything() {

        fetchEntrantes = async () => {
            const res1 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=entrantes')
            var jsonData1 = await res1.json()
            entrantes = jsonData1
            //console.log(entrantes)
            this.setState({ entrantes: entrantes })
            //console.log(jsonData1)

        }
        fetchSartenes = async () => {
            const res2 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=sartenes')
            var jsonData2 = await res2.json()
            sartenes = jsonData2
            this.setState({ sartenes: sartenes })

        }
        fetchEnsaladas = async () => {
            const res3 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=ensaladas')
            var jsonData3 = await res3.json()
            ensaladas = jsonData3
            this.setState({ ensaladas: ensaladas })

        }
        fetchCarnes = async () => {
            const res4 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=carnes')
            var jsonData4 = await res4.json()
            carnes = jsonData4
            this.setState({ carnes: carnes })

        }
        fetchPescados = async () => {
            const res5 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=pescados')
            var jsonData5 = await res5.json()
            pescados = jsonData5
            this.setState({ pescados: pescados })

        }
        fetchPastas = async () => {
            const res6 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=pastas')
            var jsonData6 = await res6.json()
            pastas = jsonData6
            this.setState({ pastas: pastas })

        }
        fetchPizzas = async () => {
            const res7 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=pizzas')
            var jsonData7 = await res7.json()
            pizzas = jsonData7
            this.setState({ pizzas: pizzas })

        }
        fetchRisottos = async () => {
            const res8 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=risottos')
            var jsonData8 = await res8.json()
            risottos = jsonData8
            this.setState({ risottos: risottos })

        }
        fetchVeganeandos = async () => {
            const res9 = await fetch('https://planetothebrain.com/ilborsalino/v1/menu-category-dishes/?category=veganeando')
            var jsonData9 = await res9.json()
            veganeandos = await jsonData9

            // await this.setState({veganeandos: veganeandos})
            // console.log(veganeandos)
            this.setState({ veganeandos: veganeandos })


        }


        await Promise.all(
            [fetchEntrantes(),
            fetchSartenes(),
            fetchEnsaladas(),
            fetchCarnes(),
            fetchPescados(),
            fetchPastas(),
            fetchPizzas(),
            fetchRisottos(),
            fetchVeganeandos()])
    }



    componentDidMount() {
        this.loadEverything().finally(() => this.setState({ loading: false }))

    }

    render() {
        return (<>{this.state.loading ? null :
            <ScrollView>
                <View style={styles.screen}>
                    <Text style={styles.textBold}>Entrantes</Text>
                    {this.state.entrantes.map(entrante => (
                        <View style={styles.card} key={entrante.id}>
                            {entrante.image_link !== null ? <ScaledImage style={{ marginTop: 20, marginBottom: 20 }} uri={entrante.image_link} width={300} /> : null}
                            <Text style={styles.text}>{entrante.dish}</Text>
                            <Text style={styles.text}>{entrante.price} €</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.screen}>
                    <Text style={styles.textBold}>Sartenes</Text>
                    {this.state.sartenes.map(entrante => (
                        <View style={styles.card} key={entrante.id}>
                            {entrante.image_link !== null ? <ScaledImage style={{ marginTop: 20, marginBottom: 20 }} uri={entrante.image_link} width={300} /> : null}
                            <Text style={styles.text}>{entrante.dish}</Text>
                            <Text style={styles.text}>{entrante.price} €</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.screen}>
                    <Text style={styles.textBold}>Ensaladas</Text>
                    {this.state.ensaladas.map(entrante => (
                        <View style={styles.card} key={entrante.id}>
                            {entrante.image_link !== null ? <ScaledImage style={{ marginTop: 20, marginBottom: 20 }} uri={entrante.image_link} width={300} /> : null}
                            <Text style={styles.text}>{entrante.dish}</Text>
                            <Text style={styles.text}>{entrante.description}</Text>
                            <Text style={styles.text}>{entrante.price} €</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.screen}>
                    <Text style={styles.textBold}>Carnes</Text>
                    {this.state.carnes.map(entrante => (
                        <View style={styles.card} key={entrante.id}>
                            {entrante.image_link !== null ? <ScaledImage style={{ marginTop: 20, marginBottom: 20 }} uri={entrante.image_link} width={300} /> : null}
                            <Text style={styles.text}>{entrante.dish}</Text>
                            <Text style={styles.text}>{entrante.price} €</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.screen}>
                    <Text style={styles.textBold}>Pescados</Text>
                    {this.state.pescados.map(entrante => (
                        <View style={styles.card} key={entrante.id}>
                            {entrante.image_link !== null ? <ScaledImage style={{ marginTop: 20, marginBottom: 20 }} uri={entrante.image_link} width={300} /> : null}
                            <Text style={styles.text}>{entrante.dish}</Text>
                            <Text style={styles.text}>{entrante.price} €</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.screen}>
                    <Text style={styles.textBold}>Pastas</Text>
                    {this.state.pastas.map(entrante => (
                        <View style={styles.card} key={entrante.id}>
                            {entrante.image_link !== null ? <ScaledImage style={{ marginTop: 20, marginBottom: 20 }} uri={entrante.image_link} width={300} /> : null}
                            <Text style={styles.text}>{entrante.dish}</Text>
                            <Text style={styles.text}>{entrante.price} €</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.screen}>
                    <Text style={styles.textBold}>Pizzas</Text>
                    {this.state.pizzas.map(entrante => (
                        <View style={styles.card} key={entrante.id}>
                            {entrante.image_link !== null ? <ScaledImage style={{ marginTop: 20, marginBottom: 20 }} uri={entrante.image_link} width={300} /> : null}
                            <Text style={styles.text}>{entrante.dish}</Text>
                            <Text style={styles.text}>{entrante.description}</Text>
                            <Text style={styles.text}>{entrante.price} €</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.screen}>
                    <Text style={styles.textBold}>Risottos</Text>
                    {this.state.risottos.map(entrante => (
                        <View style={styles.card} key={entrante.id}>
                             {entrante.image_link !== null ? <ScaledImage style={{ marginTop: 20, marginBottom: 20 }} uri={entrante.image_link} width={300} /> : null}
                            <Text style={styles.text}>{entrante.dish}</Text>
                            <Text style={styles.text}>{entrante.price} €</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.screen}>
                    <Text style={styles.textBold}>Veganeando</Text>
                    {this.state.veganeandos.map(entrante => (
                        <View style={styles.card} key={entrante.id}>
                             {entrante.image_link !== null ? <ScaledImage style={{ marginTop: 20, marginBottom: 20 }} uri={entrante.image_link} width={300} /> : null}
                            <Text style={styles.text}>{entrante.dish}</Text>
                            <Text style={styles.text}>{entrante.price} €</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>}</>
        )
    }
}


const styles = StyleSheet.create({
    text: {
        color: 'white',
        textAlign: 'center',
    },
    screen: {
        //flex: 1,
        //flexGrow: 1,
        //paddingBottom: 300,
        paddingHorizontal: 15,
        backgroundColor: 'black',
    },
    card: {
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: 150,
        marginTop: 10,
        padding: 15,
        backgroundColor: 'black',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 30,
    },
    textBoldFirst: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',

    },
    textBold: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 15,
    }
})
export default Carta