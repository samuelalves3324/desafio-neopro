import { StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';

export default function AddCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar cartão</Text>
      <Card cardName="Cartão de compras" fullName="Samuel Alves" cardNumber="5502 7845 1212" brand="Bandeira"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20,
  }
});
