import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { height, width } = Dimensions.get('window');

export default function Card({ cardName, fullName, cardNumber, brand }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.cardName}>{cardName ? cardName : 'Nome do cartão'}</Text>
        <Text style={styles.brand}>{brand}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.fullName}>{fullName ? fullName : 'Nome completo'}</Text>
        <Text style={styles.cardNumber}>{cardNumber ? cardNumber : '1234 1234 1234 1234'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: width * 0.04,
    width: width * 0.9,
    height: height * 0.33,
    padding: height * 0.04,
    borderRadius: 20,
    backgroundColor: '#424242',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    marginTop: 90,
  },
  cardName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  fullName: {
    color: '#fff',
    fontSize: 16,
  },
  cardNumber: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  brand: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
