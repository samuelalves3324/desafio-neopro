import { StyleSheet, Text, View, ScrollView } from 'react-native';
import AddCardForm from '../components/AddCardForm';
import Card from '../components/Card';
import { useState } from 'react';

export default function AddCards({ navigation }) {
  const [cardName, setCardName] = useState('');
  const [fullName, setFullName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Adicionar cartão</Text>
        <Card
          cardName={cardName}
          fullName={fullName}
          cardNumber={cardNumber}
          brand="Bandeira"
        />
        <AddCardForm navigation={navigation} names={{cardName, fullName, cardNumber}} funcs={{setCardName, setFullName, setCardNumber}}/>
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
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20,
  }
});
