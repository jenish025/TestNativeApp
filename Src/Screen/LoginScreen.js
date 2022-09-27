import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const LoginScreen = (props) => {
  const [userData, setUserData] = useState({ userName: "", passWord: "" });

  const validation = () => {
    if (userData?.userName === "") {
      Alert.alert("Add UserName");
      return false;
    } else if (userData?.passWord === "") {
      Alert.alert("Add password");
      return false;
    } else {
      return true;
    }
  };

  const handleLogin = () => {
    const validat = validation();
    if (validat) {
      props?.navigation.navigate("Homescreen");
      setUserData({ userName: "", passWord: "" });
    }
  };

  const handleChangeUserName = (e) => {
    setUserData({ ...userData, userName: e.target.value });
  };
  const handleChangePassword = (e) => {
    setUserData({ ...userData, passWord: e.target.value });
  };
  return (
    <>
      <ImageBackground
        style={styles.backImg}
        source={require("../../assets/loginBack.jpeg")}
      >
        <View style={styles.container}>
          <View style={styles.inputBoxContainer}>
            <Text>UserName</Text>
            <TextInput
              style={styles.inputName}
              value={userData?.userName}
              onChange={handleChangeUserName}
              name="username"
              autoCorrect={false}
            />
            <Text>Password</Text>
            <TextInput
              style={styles.inputName}
              autoCapitalize="none"
              secureTextEntry={true}
              value={userData?.passWord}
              onChange={handleChangePassword}
              name="password"
            />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  backImg: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    opacity: 0.8,
    position: "absolute",
    top: "35%",
    left: "10%",
    alignItems: "center",
    width: "80%",
    height: "40%",
    borderWidth: 1,
    borderColor: "#babac0",
    borderRadius: 25,
    backgroundColor: "#babac0",
  },
  loginButton: {
    borderStyle: "solid",
    backgroundColor: "#74CB83",
    borderRadius: 15,
    width: "50%",
    height: 50,
    justifyContent: "center",
    opacity: 1,
  },
  loginText: {
    textAlign: "center",
    fontSize: 21,
  },
  inputName: {
    width: "80%",
  },
  inputBoxContainer: {
    width: "100%",
    margin: 10,
  },
  inputName: {
    borderWidth: 1,
    height: "20%",
    margin: 15,
    fontSize: 15,
  },
});
