import { StyleSheet, View } from 'react-native';
import OffersList from './OffersList'


const Ofertas = ({onlylastweek, ofertas}) => {


    Ofertas.defaultProps = {
        onlylastweek: false,
        ofertas: ofertas
      };


    return (
        <View style={styles.ofertas}>
            <OffersList onlylastweek={onlylastweek} ofertas={ofertas}/>
        </View>
    )
}

const styles = StyleSheet.create({
    ofertas: {
        flexGrow: 1, 
        //alignItems: 'center'
    },

})


export default Ofertas