import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";
import Divider from "../common/Divider";

const styles = StyleSheet.create({
  foodWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  title: {
    fontSize: 19,
    fontWeight: "600",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});

export default function MenuItems({
  restaurantName,
  foods,
  hideCheckbox,
  marginLeft,
}) {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const selectItem = (item, checkboxValue) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, restaurantName, checkboxValue },
    });
  };

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.id == food.id));

  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={foods}
      renderItem={({ item }) => (
        <View>
          <View style={styles.foodWrapper}>
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{ borderRadius: 0, borderColor: "lightgray" }}
                fillColor="#46ab2a"
                isChecked={isFoodInCart(item, cartItems)}
                onPress={(checkboxValue) => selectItem(item, checkboxValue)}
              />
            )}
            <FoodInfo food={item} />
            <FoodImage
              image={item.image}
              marginLeft={marginLeft ? marginLeft : 0}
            />
          </View>
          <Divider style={{ height: 0.5, marginHorizontal: 20 }} />
        </View>
      )}
    />
  );
}

const FoodInfo = (props) => {
  return (
    <View
      style={{
        width: 240,
        justifyContent: "space-evenly",
      }}
    >
      <Text style={styles.title}>{props.food.title}</Text>
      <Text>{props.food.description}</Text>
      <Text>{props.food.price}</Text>
    </View>
  );
};

const FoodImage = ({ marginLeft, ...props }) => {
  return (
    <Image
      style={[styles.image, { marginLeft: marginLeft }]}
      source={{ uri: props.image }}
    />
  );
};
