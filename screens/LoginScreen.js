import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { firebase } from '../firebaseConfig';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('Inicio de sesión exitoso', user);
            })
            .catch((error) => {
                console.log('Error en el inicio de sesión', error);
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.logo}>Facebook</Text>
            <View style={styles.inputView}>
                <TextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Correo electrónico"
                    placeholderTextColor="#777777"
                    style={styles.inputText}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder="Contraseña"
                    placeholderTextColor="#777777"
                    secureTextEntry
                    style={styles.inputText}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>Iniciar sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#1877f2',
        marginBottom: 50,
    },
    inputView: {
        width: '80%',
        backgroundColor: '#f0f2f5',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: '#000000',
    },
    loginBtn: {
        width: '80%',
        backgroundColor: '#1877f2',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 10,
    },
    loginText: {
        color: '#ffffff',
    },
    forgotPasswordText: {
        color: '#1877f2',
        marginTop: 10,
    },
});

export default LoginScreen;
