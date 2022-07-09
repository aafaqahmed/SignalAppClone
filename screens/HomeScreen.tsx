import React from "react";
import Auth from "@aws-amplify/auth";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import ChatRoomItem from "../components/ChatRoomItem";
import ChatRooms from "../assets/dummy-data/ChatRooms";
import { useNavigation } from "@react-navigation/core";

export default function HomeScreen() {
  const logOut = () => {
    Auth.signOut();
  };
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <FlatList
        data={ChatRooms}
        renderItem={({ item }) => (
          <ChatRoomItem navigation={navigation} chatRoom={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={{
          height: 50,
          margin: 10,
          backgroundColor: "orange",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={logOut}
      >
        <Text>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { backgroundColor: "white", flex: 1 },
});
