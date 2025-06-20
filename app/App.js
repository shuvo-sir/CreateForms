import { Text, View, StyleSheet, SafeAreaView, Button, TextInput, Switch, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { use, useState } from 'react';

export default function App() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <KeyboardAvoidingView 
            behavior='padding' 
            style={styles.container}
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        >
            <View style={styles.form}>
                <Image source={require("../assets/images/adaptive-icon.png")} style={styles.image}/>
                <Text style={styles.label}>Username</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Enter your user name'
                    value={username}
                    onChangeText={setUsername}
                />
                    

                <Text style={styles.label}>Pasword</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Enter yur password' 
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <Button 
                    title="Login" 
                    onPress={() => {}}
                />
            </View>
        </KeyboardAvoidingView>
    );
}
   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
        backgroundColor: "#f5f5f5",
    },
    form: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        // borderWidth: 1,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "bold",
    },
    input: {
        height: 40,
        borderColor: "#ddd",
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 5,
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: "center",
        marginBottom: 50,
    },

});