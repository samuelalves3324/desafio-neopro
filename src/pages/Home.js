import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Cartões</Text>
        <Button title="+"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});
