import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View>
      <Text style={styles.title}>Cartões</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
  }
});
