import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import colors from "../../config/colors";

const categoriesData = [
  {
    id: 1,
    name: "Pick-up",
    image: require("../../assets/images/shopping-bag.png"),
  },
  {
    id: 2,
    name: "Soft Drinks",
    image: require("../../assets/images/soft-drink.png"),
  },
  {
    id: 3,
    name: "Bakery Items",
    image: require("../../assets/images/bread.png"),
  },
  {
    id: 4,
    name: "Fast Food",
    image: require("../../assets/images/fast-food.png"),
  },
  {
    id: 5,
    name: "Deal",
    image: require("../../assets/images/deals.png"),
  },
  {
    id: 6,
    name: "Coffe & Tea",
    image: require("../../assets/images/coffee.png"),
  },
  {
    id: 7,
    name: "Desserts",
    image: require("../../assets/images/desserts.png"),
  },
];

export default function Categories() {
  return (
    <View
      style={{
        paddingLeft: 20,
        marginTop: 5,
        backgroundColor: colors.white,
        paddingVertical: 5,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categoriesData.map((category) => (
          <CategoryItem
            key={category.id}
            text={category.name}
            image={category.image}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const CategoryItem = ({ image, text }) => {
  return (
    <View style={{ alignItems: "center", marginRight: 30 }}>
      <Image
        style={{ width: 50, height: 40, resizeMode: "contain" }}
        source={image}
      />
      <Text style={{ fontWeight: "900", fontSize: 13 }}>{text}</Text>
    </View>
  );
};
