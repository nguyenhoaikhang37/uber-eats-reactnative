import { ScrollView, View } from "react-native";
import Screen from "../components/common/Screen";
import SearchBar from "../components/home/SearchBar";
import HeaderTabs from "../components/home/HeaderTabs";
import colors from "../config/colors";
import Categories from "../components/home/Categories";
import RestaurantList from "../components/home/RestaurantList";
import { useEffect, useState } from "react";
import BottomTabs from "../components/home/BottomTabs";
import Divider from "../components/common/Divider";

const YELP_API_KEY =
  "s6Fj-tuRUoA4aF68ZiIjNbpBqTw6--xjcDuIqnl94Z2CSgVp1VlFpeTrDbIycmWVx9GwkikrrS-HSd-NRGJSzVuJ8YnoGYR-XEGknfYjj_cQzWwH7wArDiWdHorrYXYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState("San Francisco");
  const [tabActive, setTabActive] = useState("Delivery");

  const getRestaurantDataFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(tabActive.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantDataFromYelp();
  }, [city, tabActive]);

  return (
    <Screen>
      <View
        style={{
          paddingVertical: 15,
          backgroundColor: colors.white,
          paddingHorizontal: 20,
        }}
      >
        <HeaderTabs tabActive={tabActive} onTabActiveChange={setTabActive} />
        <SearchBar onCityChange={setCity} />
      </View>
      <ScrollView style={{ marginTop: 5 }} showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantList
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider />
      <BottomTabs />
    </Screen>
  );
}
