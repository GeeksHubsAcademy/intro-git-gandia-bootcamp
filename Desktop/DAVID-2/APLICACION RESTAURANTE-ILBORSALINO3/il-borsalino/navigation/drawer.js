import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack, NovedadesStack, OfertasStack, LocalizacionStack, MiInfoStack, SorteosStack, TrabajarStack, CartaStack, ReservaStack } from './stack';
import { View } from 'react-native';
import { Image } from 'react-native';





const Drawer = createDrawerNavigator();

export const MyDrawer = () =>{
    return (
        <Drawer.Navigator 
        drawerContent={(props) =>{
            return (
                <View style={{ flex: 1, paddingTop: 50, backgroundColor: 'white', marginTop: 25}}>
                    <View style={{justifyContent: 'center', alignItems: 'center', height: 140}}>
                        <Image
                        style={{height: 150, width: 150, marginBottom: 50}}
                        source={require("../assets/logo2.png")}
                         />

                    </View>
                    <DrawerItemList {...props}/>
                </View>
            );
            }}
        screenOptions={{headerShown: false}}>
        
            <Drawer.Screen name="HomeStack" component={HomeStack} options={{title: 'Inicio'}}/>
            <Drawer.Screen name="Novedades-Drawer" component={NovedadesStack} options={{title: 'Novedades'}}/>
            <Drawer.Screen name="Ofertas" component={OfertasStack} options={{title: 'Ofertas'}}/>
            <Drawer.Screen name="Sorteos-Drawer" component={SorteosStack} options={{title: 'Sorteos'}}/>
            <Drawer.Screen name="Carta-Drawer" component={CartaStack} options={{title: 'Carta'}}/>
            <Drawer.Screen name="Reserva-Drawer" component={ReservaStack} options={{title: 'Reserva'}}/>
            <Drawer.Screen name="Localización" component={LocalizacionStack} options={{title: '¿Dónde estamos?'}}/>
            <Drawer.Screen name="Trabajo-Drawer" component={TrabajarStack} options={{title: 'Trabaja con nosotros'}}/>
            <Drawer.Screen name="Mi información" component={MiInfoStack} options={{title: 'Mi info'}}/>
        </Drawer.Navigator>
    )



}