import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../config/colors";

export default function RestaurantList({ restaurantData, navigation }) {
  return (
    <>
      {restaurantData.map((data) => (
        <TouchableOpacity
          key={data.id}
          activeOpacity={1}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: data.name,
              image: data.image_url,
              price: data.price,
              reviews: data.review_count,
              rating: data.rating,
              categories: data.categories,
            })
          }
        >
          <RestaurantItem
            image={data.image_url}
            name={data.name}
            time="30-40"
            rating={data.rating}
          />
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantItem = ({ image, name, time, rating }) => {
  return (
    <View style={{ backgroundColor: colors.white, padding: 10, marginTop: 10 }}>
      <Image
        style={{ width: "100%", height: 200, resizeMode: "cover" }}
        source={{ uri: image }}
      />
      <View style={{ position: "absolute", top: 15, right: 15 }}>
        <AntDesign name="hearto" size={24} color={colors.white} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>{name}</Text>
          <Text style={{ fontSize: 13, color: "gray" }}>{time} • min</Text>
        </View>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 30 / 2,
            backgroundColor: "#eee",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>{rating}</Text>
        </View>
      </View>
    </View>
  );
};
