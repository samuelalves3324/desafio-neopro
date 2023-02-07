import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Card from '../components/Card';

export default function Home({ navigation }) {
  const cards = useSelector(state => state.addCardReducer.cards);
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Cartões</Text>
          <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('AddCards') }>
            <Text style={styles.buttonTitle}>+</Text>
          </TouchableOpacity>
        </View>
          { cards.map((item) => <Card fullName={item.fullName} cardName={item.cardName} cardNumber={item.cardNumber}/>) }
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
  }
});
