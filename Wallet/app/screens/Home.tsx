import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { FIREBASE_AUTH } from '../../FirebaseConfig';

interface RouterProps {
    navigation : NavigationProp<any, any>;
}

const Home = ({navigation}: RouterProps) => {
    return (
        <View>
            <Text>Hi!</Text>
            <Button onPress={() => FIREBASE_AUTH.signOut()} title="Cerrar sesion"/>
            <Button onPress={() => navigation.navigate('Cards')} title="Mis Tarjetas"/>
            <Button onPress={() => navigation.navigate('Profile')} title="Mi Perfil"/>
        </View>

    )
}

export default Home