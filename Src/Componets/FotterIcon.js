import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import home from "../../assets/icon/home.png";
import activites from "../../assets/icon/activites.jpeg";
import user from "../../assets/icon/clipboard.png";

const data = [
  {
    id: "1",
    name: "Home",
    icon: home,
  },
  {
    id: "2",
    name: "Activity",
    icon: activites,
  },
  {
    id: "3",
    name: "Account",
    icon: user,
  },
];

const FotterIcon = () => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        scrollEnabled={false}
        style={{ width: "100%" }}
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.fotterContainer}>
            <View style={styles.fotterView}>
              <Image
                style={{ height: 40, width: 50, backgroundColor: "black" }}
                source={{
                  uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fuser-icon-symbol-design-user-icon-isolated-design_5061125.html&psig=AOvVaw1hRbctWYbjvkQv_Xwch2mE&ust=1664362054105000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDIufnltPoCFQAAAAAdAAAAABAJ",
                }}
              />
              <Text>{item?.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FotterIcon;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
  },
  fotterContainer: {
    width: "100%",
    height: 100,
    backgroundColor: "#babac0",
    alignContent: "center",
  },
  fotterView: {
    alignItems: "center",
  },
});
