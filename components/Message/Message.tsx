import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const blue = '#3777f0';
const grey = 'lightgrey';

const myId = 'u1'

const Message = ({ message }) => {

    
    const isMe = message.user.id === myId;

    return(
        <View style={[
            styles.container, isMe ? styles.rightContainer : styles.leftContainer]}
        >
            <Text style={
                {color: isMe ? 'black' : 'white'}}
            >
                {message.content}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: '75%',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    leftContainer: {
        backgroundColor: blue,
        marginRight: 'auto',
        marginLeft: 10
    },
    rightContainer: {
        backgroundColor: grey,
        marginLeft: 'auto',
        marginRight: 10
    }

});

export default Message