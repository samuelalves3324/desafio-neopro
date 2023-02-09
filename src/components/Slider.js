import { useRef, useState } from "react";
import { Dimensions, View, FlatList, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { StyleSheet } from "react-native";
import { changeCardNumbersVisibility, removeCard } from "../redux/actions";
import RemoveCardBtn from "./RemoveCardBtn";
import HideBtn from "./HideBtn";

const { width } = Dimensions.get('window');
const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

export default function Slider() {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cardsReducer.cards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeId, setActiveId] = useState(0);
  let flastListRef = useRef();
  const scrollToIndex = (index) => {
    flastListRef.current?.scrollToIndex({ animated: true, index, })
  }
  const removeCardButtomClick = () => {
    if (cards.length === 1) {
      dispatch(removeCard(cards[0].id));
    } else if (cards.length > 1 && currentIndex === 0) {
      dispatch(removeCard(cards[0].id));
    } else if (cards.length > 1) {
      dispatch(removeCard(activeId));
      scrollToIndex(currentIndex - 1);
    }
  }
  const hideButtonClick = () => {
    dispatch(changeCardNumbersVisibility());
  }
  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems[0]?.hasOwnProperty('index')) {
      setCurrentIndex(viewableItems[0].index);
      setActiveId(viewableItems[0].item.id);
    }
  }).current;
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
            <TouchableOpacity
              key={index * 100}
              onPress={() => scrollToIndex(index)}
              style={[styles.dot, { backgroundColor: index === currentIndex ? 'black' : 'grey' }]}
            />
          ))}
        </View>
      }
      <Text style={styles.actionsTitle}>Ações</Text>
      <HideBtn hideButtomClick={hideButtonClick} />
      <RemoveCardBtn removeCardButtomClick={removeCardButtomClick} />
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
  },
  actionsTitle: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
  }
});
