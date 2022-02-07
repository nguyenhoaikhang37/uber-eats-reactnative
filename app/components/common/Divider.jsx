import { View, Text } from "react-native";

export default function Divider({ style }) {
  return (
    <View style={{ height: 1, backgroundColor: "#b9b8bf", ...style }}></View>
  );
}
