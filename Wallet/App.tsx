import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import SignUp from './app/screens/SignUp';
import Cards from './app/screens/Cards';
import Profile from './app/screens/Profile';
import Home from './app/screens/Home';
import Welcome from './app/screens/WelcomeScreen';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout(){
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name='Home' component={Home}/>
      <InsideStack.Screen name='Cards' component={Cards}/>
      <InsideStack.Screen name='Profile' component={Profile}/>
    </InsideStack.Navigator>
  );
}

function OutsideLayout(){
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name='Welcome' component={Welcome}/>
      <InsideStack.Screen name='Login' component={Login}/>
      <InsideStack.Screen name='SignUp' component={SignUp}/>
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        { user ? (
          <Stack.Screen name='Inside' component={InsideLayout} options={{ headerShown: false}}/>
        ) : (
          <Stack.Screen name='Outside' component={OutsideLayout} options={{ headerShown: false}}/>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
