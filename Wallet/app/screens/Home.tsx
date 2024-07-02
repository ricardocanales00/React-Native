import { Button, Text, TouchableOpacity, Image, View, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

interface RouterProps {
    navigation : NavigationProp<any, any>;
}

const Home = ({navigation}: RouterProps) => {
    return (
        <SafeAreaView>
            <View>
                <Text>Expensify</Text>
                <TouchableOpacity>
                    <Button onPress={() => FIREBASE_AUTH.signOut()} title="Cerrar sesion"/>
                </TouchableOpacity>
            </View>
            <View>
                <Image source={require('../assets/icon.png')} />
            </View>
        </SafeAreaView>
        
    );
}

export default Home

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    stretch: {
      width: 50,
      height: 200,
      resizeMode: 'stretch',
    },
  });