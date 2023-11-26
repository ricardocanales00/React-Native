import { View, Text, ViewBase, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from "react-native"
import React, { useState } from "react"
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error: any){
            alert('Contrasena o correo electronico incorrectos')
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error: any){
            console.log(error);
            alert('No se pudo registrar al usuario debido a ' + error.message)
        } finally {
            setLoading(false);
        }
    }



    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <KeyboardAvoidingView behavior="padding">
                <TextInput value={email} style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder="Password" autoCapitalize="none" onChangeText={(text) => setPassword(text)}></TextInput>
            
                { loading ? (
                    <ActivityIndicator size="large" color="#0000ff"/>
                ) : (
                    <>
                        <Button title="Iniciar sesion" onPress={signIn}/>
                        <Button title="Registrar usuario" onPress={signUp}/>
                    </>
                )}
            </KeyboardAvoidingView>
        </View>
    );
};

export default Login

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff'
    }
});