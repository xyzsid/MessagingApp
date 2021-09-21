import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Message from '../components/Message';

import { useRoute } from '@react-navigation/core'

import ChatRoomData from '../assets/dummy-data/Chats';
import { FlatList } from 'react-native-gesture-handler';
import MessageInput from '../components/MessageInput';


export default function ChatRoomScreen() {

    const route = useRoute();

    return (
        <SafeAreaView style={styles.page}>
            <FlatList 
                data={ChatRoomData.messages}
                renderItem={({item}) => <Message message={item} />}
                inverted
            />
            <MessageInput />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
    }
})