import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <ChatRoomItem />
      <ChatRoomItem />
      <ChatRoomItem />
      <ChatRoomItem />
      <ChatRoomItem />
      <ChatRoomItem />
      <ChatRoomItem />
      <ChatRoomItem />
      <ChatRoomItem />
      <ChatRoomItem />
      <ChatRoomItem />
      <ChatRoomItem />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
