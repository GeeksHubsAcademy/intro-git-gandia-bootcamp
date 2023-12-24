import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Main from '../screens/home-screen';
import Main from '../src/components/Main2.jsx';
import NewsScreen from '../src/components/NewsScreen'
import OfferScreen from '../src/components/OfferScreen'
import Noticias from '../src/components/Noticias'
import Ofertas from '../src/components/Ofertas'
import Localizacion from '../src/components/Localizacion'
import MiInfo from '../src/components/MiInfo'
import Sorteos from '../src/components/Sorteos'
import SorteoScreen from '../src/components/SorteoScreen'
import Trabajos from '../src/components/Trabajos'
import TrabajosScreen from '../src/components/TrabajosScreen'
import Carta from '../src/components/Carta'
import { navOptions } from './options';
import { useNavigation } from '@react-navigation/native';



const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator initialRouteName="Inicio" screenOptions={()=>navOptions(navigation)}>
      <Stack.Screen name="Inicio" component={Main} />
      <Stack.Screen name="Novedad" component={NewsScreen} />
      <Stack.Screen name="Oferta/Promoción" component={OfferScreen} />
      <Stack.Screen name="Sorteo" component={SorteoScreen} />
    </Stack.Navigator>
  );
}

export const NovedadesStack = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator initialRouteName="Novedades" screenOptions={()=>navOptions(navigation)}>
      <Stack.Screen name="Novedades" component={Noticias} />
      <Stack.Screen name="Novedad" component={NewsScreen} />
    </Stack.Navigator>
  );
}

export const OfertasStack = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator initialRouteName="Ofertas y Promociones" screenOptions={()=>navOptions(navigation)}>
      <Stack.Screen name="Ofertas y Promociones" component={Ofertas} />
      <Stack.Screen name="Oferta/Promoción" component={OfferScreen} />
    </Stack.Navigator>
  );
}

export const SorteosStack = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator initialRouteName="Sorteos" screenOptions={()=>navOptions(navigation)}>
      <Stack.Screen name="Sorteos" component={Sorteos} />
      <Stack.Screen name="Sorteo" component={SorteoScreen} />
    </Stack.Navigator>
  );
}

export const CartaStack = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator initialRouteName="Carta" screenOptions={()=>navOptions(navigation)}>
      <Stack.Screen name="Carta" component={Carta} />
    </Stack.Navigator>
  );
}

export const TrabajarStack = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator initialRouteName="Trabajos" screenOptions={()=>navOptions(navigation)}>
      <Stack.Screen name="Trabajos" component={Trabajos} />
      <Stack.Screen name="Trabajo" component={TrabajosScreen} />
    </Stack.Navigator>
  );
}

export const LocalizacionStack = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator initialRouteName="Dónde estamos" screenOptions={()=>navOptions(navigation)}>
      <Stack.Screen name="Dónde estamos" component={Localizacion} />
    </Stack.Navigator>
  );
}

export const MiInfoStack = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator initialRouteName="Mi Info" screenOptions={()=>navOptions(navigation)}>
      <Stack.Screen name="Mi Info" component={MiInfo} />
    </Stack.Navigator>
  );
}