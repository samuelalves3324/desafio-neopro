import { TouchableOpacity, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function HideBtn({ hideButtomClick }) {
  const hidden = useSelector(state => state.changeVisibilityReducer.hidden);
  return (
    <TouchableOpacity style={styles.hideButton} onPress={hideButtomClick}>
          {hidden ?
            <Image style={styles.hideButtonImg} source={require(`../images/hide.png`)} />
            : <Image style={styles.hideButtonImg} source={require(`../images/view.png`)} />}
          {hidden ?
            <Text style={styles.hideButtonTitle}>MOSTRAR NÚMERO</Text>
            : <Text style={styles.hideButtonTitle}>ESCONDER NÚMERO</Text>}
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  hideButton: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  hideButtonTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2D2940',
  },
  hideButtonImg: {
    marginHorizontal: 20,
    width: 30,
    height: 30,
  },
})