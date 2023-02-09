import { useRef, useState } from "react";
import { Dimensions, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import Card from "./Card";
import { StyleSheet } from "react-native";

const { width } = Dimensions.get('window');
const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

export default function Slider() {
  const [currentIndex, setcurrentIndex] = useState(0);
  let flastListRef = useRef();
  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems[0]?.hasOwnProperty('index')) {
      setcurrentIndex(viewableItems[0].index);
    }
  }).current;
  const cards = useSelector(state => state.addCardReducer.cards);
  const renderItems = ({ item }) => (
    <Card cardName={item.cardName} fullName={item.fullName} cardNumber={item.cardNumber} />
  )
  return (
    <View>
      <FlatList
        renderItem={renderItems}
        data={cards}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_item, index) => index.toString()}
        ref={(ref) => {
          flastListRef.current = ref;
        }}
        viewabilityConfig={viewConfigRef}
        onViewableItemsChanged={onViewRef}
        snapToInterval={width * 0.98}
      />
      {
        cards.length > 1 &&
        <View style={styles.dotsContainer}>
          {cards.map((_item, index) => (
            <View
              key={index*100}
              style={[styles.dot, { backgroundColor: index === currentIndex ? 'black' : 'grey' }]}
            />
          ))}
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    marginHorizontal: 1,
  }
});
