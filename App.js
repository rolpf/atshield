import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Dashboard from './src/Dashboard';
import List from './src/List';
import Login from './src/Login';
import Signup from './src/Signup';
import Settings from './src/Settings';

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("App executed");
  
  return (
    <SafeAreaView style={{width:'100%', height:'100%'}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'ATShield | Dashboard' }} />
          <Stack.Screen name="List" component={List} options={{ title: 'ATShield | Fire Extinguishers' }} />
          <Stack.Screen name="Settings" component={Settings} options={{ title: 'ATShield | Manage My Info' }} />
          <Stack.Screen name="Signup" component={Signup} options={{ title: 'ATShield | Sign Up' }}/>
          <Stack.Screen name="Login" component={Login} options={{ title: 'ATShield | Log In' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

// const ProfileScreen = ({ navigation, route }) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#46484C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
