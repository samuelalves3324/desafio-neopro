import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

const { height, width } = Dimensions.get('window');

const brands = {
  '63': require('../images/elo.png'),
  '55': require('../images/mastercard.png'),
  '41': require('../images/visa.png'),
  '60': require('../images/hipercard.png'),
};

const getBrand = (number) => {
  if (number && number.length >= 2) {
    const prefix = number.substring(0, 2);
    return brands.hasOwnProperty(prefix) ? brands[prefix] : 'Bandeira';
  }
  return 'Bandeira';
}

export default function Card({ cardName, fullName, cardNumber }) {
  const hidden = useSelector(state => state.changeVisibilityReducer.hidden);
  return (
      <LinearGradient
      style={styles.container}
      colors={['#EC008C', '#FC6767']}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      >
        <View style={styles.header}>
          <Text style={styles.cardName}>{cardName ? cardName : 'Nome do cartão'}</Text>
          {getBrand(cardNumber) === 'Bandeira' ?
            <Text style={styles.brand}>Bandeira</Text>
            : <Image style={styles.brandImg} source={getBrand(cardNumber)} />}
        </View>
        <View style={styles.footer}>
          <Text style={styles.fullName}>{fullName ? fullName : 'Nome completo'}</Text>
          {hidden ?
            <Text style={styles.cardNumber}>●●●● ●●●● ●●●● ●●●●</Text>
            : <Text style={styles.cardNumber}>{cardNumber ? cardNumber : '1234 1234 1234 1234'}</Text>}
        </View>
      </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: width * 0.04,
    width: width * 0.9,
    height: height * 0.33,
    padding: height * 0.04,
    borderRadius: 20,
    backgroundColor: 'grey',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
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
  },
  brandImg: {
    width: 50,
    height: 50,
    marginTop: -(height * 0.02),
  },
});
