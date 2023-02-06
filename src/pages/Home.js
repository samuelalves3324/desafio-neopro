import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cartões</Text>
        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('AddCards') }>
          <Text style={styles.buttonTitle}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
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
