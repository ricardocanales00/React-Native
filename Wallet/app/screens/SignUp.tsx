import { View, Text, ViewBase, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from "react-native"
import React, { useState } from "react";
import { FIREBASE_AUTH, FIREBASE_DB } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword  } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [role, setRole] = useState('');
    const [loading, setLoading] = useState(false);
    
    const auth = FIREBASE_AUTH;
    const firestore = FIREBASE_DB;

    const roles = ['Cliente'];

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                const doc = addDoc(collection(FIREBASE_DB,'users'), { uid: auth.currentUser.uid, name: name, lastname: lastname, email: email, role: '1' });
                console.log(response);
            })
            
        } catch (error: any){
            console.log(error);
            alert('No se pudo registrar al usuario debido a ' + error.message)
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Text>Registro</Text>
            <KeyboardAvoidingView behavior="padding">
                <TextInput value={name} style={styles.input} placeholder="Nombre" autoCapitalize="none" onChangeText={(text) => setName(text)}/>
                <TextInput value={lastname} style={styles.input} placeholder="Apellidos" autoCapitalize="none" onChangeText={(text) => setLastname(text)}/>
                <TextInput value={email} style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder="Password" autoCapitalize="none" onChangeText={(text) => setPassword(text)}></TextInput>
                { loading ? (
                <ActivityIndicator size="large" color="#0000ff"/>
            ) : (
                <>
                    <Button title="Registrar usuario" onPress={signUp}/>
                </>
            )}
            </KeyboardAvoidingView>
        </View>
    );
};

export default SignUp

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        fontSize: 16,
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff',
        borderColor: 'gray',
        color: 'black',
    },
});