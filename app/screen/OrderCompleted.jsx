import { View, Text, SafeAreaView, ScrollView } from "react-native";
import LottieView from "lottie-react-native";
import { useEffect, useState } from "react";
import firebase from "../firebase";
import MenuItems from "../components/restaurant-detail/MenuItems";

export default function OrderCompleted({ route }) {
  const [lastOrder, setLastOrder] = useState({});

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => setLastOrder(doc.data()));
      });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ margin: 15, alignItems: "center", height: "100%" }}>
        <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Your order at {route.params.restaurantName} has been placed for $
          {route.params.totalUSD} 🚀
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MenuItems foods={lastOrder.items} hideCheckbox marginLeft={8} />
          <LottieView
            style={{ height: 200, alignSelf: "center" }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
