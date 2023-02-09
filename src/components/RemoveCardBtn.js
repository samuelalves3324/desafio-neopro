import { TouchableOpacity, Image, Text } from 'react-native';
import { StyleSheet } from "react-native";

export default function RemoveCardBtn({ removeCardButtomClick }) {
  return (
    <TouchableOpacity
        style={styles.removeCardButton}
        onPress={removeCardButtomClick}
      >
        <Image style={styles.removeCardButtonImg} source={require('../images/bin.png')} />
        <Text style={styles.removeCardButtonTitle}>APAGAR CARTÃO</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  removeCardButton: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  removeCardButtonTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#F21D1D',
  },
  removeCardButtonImg: {
    marginHorizontal: 22.5,
    width: 25,
    height: 25,
  },
})
