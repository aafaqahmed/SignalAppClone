import { FlatList, StyleSheet, View } from "react-native";
import Users from "../assets/dummy-data/Users";
import { useNavigation } from "@react-navigation/core";
import UserItem from "../components/UserItem";
import { DataStore } from "aws-amplify";
import { User } from "../src/models";
import { useState, useEffect } from "react";

export default function UsersScreen() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    DataStore.query(User).then(setUsers);
  }, []);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const fetchedUsers = await DataStore.query(User);
  //     setUsers(fetchedUsers);
  //   };
  //   fetchUsers();
  // }, []);

  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserItem user={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { backgroundColor: "white", flex: 1 },
});
