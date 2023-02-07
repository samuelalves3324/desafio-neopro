import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/Card';
import { changeCardNumbersVisibility } from '../redux/actions';

export default function Home({ navigation }) {
  const cards = useSelector(state => state.addCardReducer.cards);
  const hidden = useSelector(state => state.changeVisibilityReducer.hidden);
  const dispatch = useDispatch();
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Cartões</Text>
          <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('AddCards') }>
            <Text style={styles.buttonTitle}>+</Text>
          </TouchableOpacity>
        </View>
          { cards.map((item) => <Card fullName={item.fullName} cardName={item.cardName} cardNumber={ hidden ? '**** **** **** ****' : item.cardNumber}/>) }
        <TouchableOpacity style={styles.hideButton} onPress={ () => dispatch(changeCardNumbersVisibility()) }>
          <Text style={styles.hideButtonTitle}>ESCONDER NÚMERO</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'red',
    margin: 20,
    borderRadius: 10,
  },
  hideButtonTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  }
});
