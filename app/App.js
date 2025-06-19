import { Text, View, StyleSheet, SafeAreaView, StatusBar, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
    const [name, setName] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <TextInput 
                style={styles.input} 
                value={name} 
                onChangeText={setName} // ✅ fixed this line
                placeholder="Enter your name"
            />

            <TextInput
                style = {[styles.input, styles.multilineText]}
                placeholder='message'
                multiline
            />
            <Text style={styles.text}>My name is {name}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: StatusBar.currentHeight || 0, // fallback for iOS
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        width: 250,
    },
    text: {
        fontSize: 30,
        padding: 10,
    },
    multilineText: {
        minHeight: 100,
        textAlignVertical: "top",
    }
});
