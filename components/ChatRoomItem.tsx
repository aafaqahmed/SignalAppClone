import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";

const ChatRoomItem = ({ chatRoom, navigation }) => {
  const onPress = () => {
    navigation.navigate("ChatRoom", { id: chatRoom.id });
  };

  const user = chatRoom.users[1];
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        source={{
          uri: user.imageUri,
        }}
      />
      {chatRoom.newMessages && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>
      )}

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </Pressable>
  );
};

export default ChatRoomItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    borderRadius: 25,
    width: 50,
    height: 50,
    marginRight: 10,
  },
  badgeContainer: {
    position: "absolute",
    backgroundColor: "#3777f0",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    top: 10,
    left: 45,
    width: 20,
    height: 20,
  },
  badgeText: { color: "white", alignSelf: "center", fontSize: 12 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: { fontWeight: "bold", fontSize: 18 },
  text: { color: "gray", marginBottom: 3 },
});
