import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "01",
    title: "Get a ride",
    img: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "02",
    title: "Order food",
    img: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOption = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item?.screen)}
          style={tw`p-7 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.img }}
            />
            <Text>{item?.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOption;

const styles = StyleSheet.create({});
