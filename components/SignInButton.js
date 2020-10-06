import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { firebase } from '../utils/firebase';



const SignInButton = ({navigation, user}) => (
  user && user.uid ?
  <Button title="Logout" color="#488aff"
  onPress={() => firebase.auth().signOut()}
  />
  : <Button title="SignIn" color="#488aff"
  onPress={() => navigation.navigate('SignInScreen')}
  />
);



const styles = StyleSheet.create({
  
});

export default SignInButton;