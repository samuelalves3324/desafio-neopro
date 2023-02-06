import { StyleSheet, Text, View, Button } from 'react-native';

export default function AddCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar cartão</Text>
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
