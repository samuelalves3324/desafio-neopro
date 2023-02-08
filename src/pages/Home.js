import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '../components/Slider';
import { changeCardNumbersVisibility } from '../redux/actions';

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const hidden = useSelector(state => state.changeVisibilityReducer.hidden);
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Cartões</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddCards')}>
            <Text style={styles.buttonTitle}>+</Text>
          </TouchableOpacity>
        </View>
        <Slider />
        <Text style={styles.actionsTitle}>Ações</Text>
        <TouchableOpacity style={styles.hideButton} onPress={() => dispatch(changeCardNumbersVisibility())}>
          {hidden ?
            <Image style={styles.hideButtonImg} source={require(`../images/hide.png`)} />
            : <Image style={styles.hideButtonImg} source={require(`../images/view.png`)} />}
          {hidden ?
            <Text style={styles.hideButtonTitle}>MOSTRAR NÚMERO</Text>
            : <Text style={styles.hideButtonTitle}>ESCONDER NÚMERO</Text>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.removeCardButton}>
          <Image style={styles.removeCardButtonImg} source={require('../images/bin.png')} />
          <Text style={styles.removeCardButtonTitle}>APAGAR CARTÃO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  button: {
    width: 50,
    height: 50,
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonTitle: {
    fontSize: 35,
    margin: 0,
  },
  hideButton: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  hideButtonTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2D2940',
  },
  hideButtonImg: {
    marginHorizontal: 20,
    width: 30,
    height: 30,
  },
  removeCardButton: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  removeCardButtonTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#F21D1D',
  },
  removeCardButtonImg: {
    marginHorizontal: 22.5,
    width: 25,
    height: 25,
  },
  actionsTitle: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
  }
});
