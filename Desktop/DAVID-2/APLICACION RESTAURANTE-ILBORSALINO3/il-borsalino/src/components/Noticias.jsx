import { StyleSheet, View } from 'react-native';
import NewsList from './NewsList'


const Noticias = ({onlylastweek, noticias}) => {

    Noticias.defaultProps = {
        onlylastweek: false,
        noticias: noticias
      };

    return (
        <View style={styles.ofertas}>
            <NewsList onlylastweek={onlylastweek} noticias={noticias}/>
        </View>
    )
}

const styles = StyleSheet.create({
    //screen: {
        //backgroundColor: 'black'
    //},
    ofertas: {
        //height: '90%',
        flex: 1,
        flexGrow: 1,
        //alignItems: 'center'
    },

})

export default Noticias