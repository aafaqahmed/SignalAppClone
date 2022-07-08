import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import Message from "../components/Message";
import chatRoomData from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const ChatRoomScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  // navigation.setOptions({ title: "Elon Musk" });
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
        showsVerticalScrollIndicator={false}
      />
      <MessageInput />
    </SafeAreaView>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
});
