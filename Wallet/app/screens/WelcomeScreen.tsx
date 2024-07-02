import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationProp } from "@react-navigation/native";

interface RouterProps {
    navigation : NavigationProp<any, any>;
}

const Welcome = ({navigation}: RouterProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.loginButton}  onPress={() => navigation.navigate('Login')}></View>
            
            <Button onPress={() => navigation.navigate('SignUp')} title="Registrate"/>
        </View>

    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        justifyContent: 'flex-end'
    },
    loginButton: {
        backgroundColor: '#F5B60A',
        width: '50%',
        height: 70,
        borderRadius: 4,
    },
    stretch: {
        width: 50,
        height: 200,
        resizeMode: 'stretch',
    },
});