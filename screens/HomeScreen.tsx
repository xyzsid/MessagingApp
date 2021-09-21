import * as React from 'react';

import { StyleSheet, View, FlatList } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';

import chatRoomsData from '../assets/dummy-data/ChatRooms';

const chatRoom1 = chatRoomsData[0];
const chatRoom2 = chatRoomsData[1];
const chatRoom3 = chatRoomsData[2];

export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <FlatList 
        data={chatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item}/>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
