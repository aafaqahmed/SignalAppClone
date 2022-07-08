import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.warn("sending:", message);

    setMessage("");
  };

  const onPlusClicked = () => {
    console.warn("Plus button clicked");
  };

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <View style={styles.inputContainer}>
        <SimpleLineIcons
          style={styles.icon}
          name="emotsmile"
          size={24}
          color="#595959"
        />

        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type something here"
        />

        <Feather name="camera" size={24} color="#595959" style={styles.icon} />
        <MaterialCommunityIcons
          name="microphone-outline"
          size={24}
          color="black"
          style={styles.icon}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={onPress} style={styles.buttonContainer}>
          {message ? (
            <Ionicons name="send" size={24} color="white" style={styles.icon} />
          ) : (
            <Feather name="plus" size={24} color="white" style={styles.icon} />
          )}
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  root: { flexDirection: "row", padding: 10 },
  inputContainer: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#dedede",
    alignItems: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  icon: {
    margin: 5,
  },
  input: {
    flex: 1,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#3777f0",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 35,
  },
});
