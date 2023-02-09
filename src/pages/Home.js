import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Slider from '../components/Slider';

export default function Home({ navigation }) {
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
      </View>
    </ScrollView>
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
  },
});
