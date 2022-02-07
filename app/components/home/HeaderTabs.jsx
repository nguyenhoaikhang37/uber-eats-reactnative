import { Text, TouchableOpacity, View } from "react-native";
import colors from "../../config/colors";

export default function HeaderTabs({ tabActive, onTabActiveChange }) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <HeaderButton
        text="Delivery"
        tabActive={tabActive}
        onTabActiveChange={onTabActiveChange}
      />
      <HeaderButton
        text="Pickup"
        tabActive={tabActive}
        onTabActiveChange={onTabActiveChange}
      />
    </View>
  );
}

function HeaderButton({ text, tabActive, onTabActiveChange }) {
  return (
    <TouchableOpacity
      onPress={() => onTabActiveChange(text)}
      style={{
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        backgroundColor: tabActive === text ? colors.black : undefined,
      }}
    >
      <Text
        style={{
          fontWeight: "900",
          color: tabActive === text ? colors.white : undefined,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
