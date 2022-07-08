import { View, Text, StyleSheet } from "react-native";
import React from "react";

const blue = "#3777f0";
const gray = "lightgrey";

const myID = "u1";

const Message = ({ message }) => {
  const isMe = message.user.id === myID;
  return (
    <View
      style={[
        styles.container,
        isMe ? styles.rightContainer : styles.leftContainer,
      ]}
    >
      <Text
        style={{
          color: isMe ? "black" : "white",
        }}
      >
        {message.content}
      </Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3777f0",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    maxWidth: "75%",
  },
  leftContainer: {
    backgroundColor: blue,
    marginLeft: 10,
    marginRight: "auto",
  },
  rightContainer: {
    backgroundColor: gray,
    marginLeft: "auto",
    marginRight: 10,
  },
});
