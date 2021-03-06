import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Auth, DataStore } from "aws-amplify";
import { ChatRoom, ChatRoomUser, User } from "../src/models";
import { useNavigation } from "@react-navigation/native";

const UserItem = ({ user }) => {
  const navigation = useNavigation();
  const onPress = async () => {
    // Create chat room with that users
    const newChatRoom = await DataStore.save(new ChatRoom({ newMessages: 0 }));

    //connect users with Chat Room
    const authUser = await Auth.currentAuthenticatedUser();
    const dbUser = await DataStore.query(User, authUser.attributes.sub);

    await DataStore.save(
      new ChatRoomUser({
        user: dbUser,
        chatRoom: newChatRoom,
      })
    );

    await DataStore.save(
      new ChatRoomUser({
        user,
        chatRoom: newChatRoom,
      })
    );

    navigation.navigate("ChatRoom", { id: newChatRoom.id });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        source={{
          uri: user.imageUri,
        }}
      />
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserItem;

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
