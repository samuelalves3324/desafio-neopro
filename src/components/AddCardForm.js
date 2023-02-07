import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { addCard } from '../redux/actions';
import { useDispatch } from 'react-redux';

export default function AddCardForm({names, funcs}) {
  const { cardName, fullName, cardNumber } = names;
  const { setCardName, setFullName, setCardNumber } = funcs;
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.label}>NOME DO CARTÃO</Text>
      <TextInput
        placeholder='Nome do cartão'
        placeholderTextColor="black"
        style={styles.input}
        value={cardName}
        onChangeText={ text => setCardName(text) }
      />
      <Text style={styles.label}>NOME COMPLETO</Text>
      <TextInput
        placeholder='Nome completo'
        placeholderTextColor="black"
        style={styles.input}
        value={fullName}
        onChangeText={ text => setFullName(text) }
      />
      <Text style={styles.label}>NÚMERO</Text>
      <TextInputMask
        placeholder='1234 1234 1234 1234'
        placeholderTextColor="black"
        type='credit-card'
        style={styles.input}
        value={cardNumber}
        onChangeText={ text => setCardNumber(text) }
      />
      <TouchableOpacity style={styles.button} onPress={ () => dispatch(addCard({cardName, cardNumber, fullName})) }>
        <Text style={styles.buttonTitle}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: '5%',
  },
  input: {
    borderColor: '#E3E1E1',
    padding: 10,
    height: 40,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 6,
  },
  label: {
    fontSize: 8,
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    height: 50,
    marginTop: 20,
    backgroundColor: '#00B2FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
