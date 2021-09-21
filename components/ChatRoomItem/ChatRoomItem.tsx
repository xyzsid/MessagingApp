import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import styles from './Styles'
import { useNavigation } from '@react-navigation/core'

export default function ChatRoomItem({ chatRoom }) {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('ChatRoom', { id: chatRoom.id });
    }
    return (
        <Pressable 
            style={styles.container}
            onPress={onPress}
        >
            <Image 
                source= {{uri: chatRoom.users[1].imageUri}} 
                style={styles.image}
            />

            {chatRoom.newMessages > 0 ? <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
            </View> : null}

            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text style={styles.name}>{chatRoom.users[1].name}</Text>
                    <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
                </View>
                <Text numberOfLines={1} style={styles.text}>{chatRoom.lastMessage.content}</Text>
            </View>
        </Pressable>
    );
}