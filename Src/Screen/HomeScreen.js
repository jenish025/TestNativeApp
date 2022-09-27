import { SafeAreaView, StyleSheet, View, Image, Text } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOption from "../Componets/NavOption";
import FotterIcon from "../Componets/FotterIcon";

const HomeScreen = () => {
  return (
    <SafeAreaView style={[tw`bg-white`, styles.homeContainer]}>
      <View style={{ padding: 0, height: "100%" }}>
        <View style={[tw`p-0`, styles.homeHeader]}>
          <Image
            style={{
              width: 100,
              height: 100,
              margin: 15,
              resizeMode: "contain",
            }}
            source={{
              uri: "https://links.papareact.com/gzs",
            }}
          />
          <NavOption />
        </View>
        <View style={[styles.homeBody]}>
          <Text>body</Text>
        </View>
        <View style={[styles.fotterContainer]}>
          <FotterIcon />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    height: "100%",
    display: "flex",
  },
  homeHeader: {
    height: "40%",
  },
  homeBody: {
    height: "55%",
  },
  fotterContainer: {
    width: "100%",
    padding: 0,
  },
});
