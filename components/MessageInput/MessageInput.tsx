import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native'
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

const MessageInput = () => {
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        console.warn("sending: ", message);

        setMessage('')
    }

    const onPlusClicked = () => {
        console.warn("adding: ")
    }

    const onPress = () => {
        if (message) {
            sendMessage();
        } else {
            onPlusClicked();
        }
    }

    return (
        <KeyboardAvoidingView 
            style={styles.root} 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            keyboardVerticalOffset={100}
        >
            <View style={styles.inputContainer}>
                <SimpleLineIcons name="emotsmile" size={24} color="grey" style={styles.icon}/>
                
                <TextInput 
                    style={styles.input} 
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Signal Message..."
                />
                
                <Feather name="camera" size={24} color="grey" style={styles.icon}/>
                <MaterialCommunityIcons name="microphone-outline" size={24} color="grey" style={styles.icon}/>
            </View>
            <Pressable 
                style={styles.buttonContainer}
                onPress={onPress}
            >
                {message ? <Ionicons name="send" size={15} color="white" /> : <AntDesign name="plus" size={24} color="white"/> }
            </Pressable>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 10,
    },
    inputContainer: {
        backgroundColor: 'lightgrey',
        flex: 1,
        marginRight: 10,
        borderRadius: 25,
        borderColor: 'grey',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
    },
    input : {
        flex: 1,
    },
    icon : {
        marginHorizontal: 5,
    },
    buttonContainer: {
        width: 30,
        height: 30,
        backgroundColor: '#3777f0',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 35,
    }
})

export default MessageInput