import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Form from "../components/Form";
import * as Yup from "yup";
import { firebase } from "../utils/firebase";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please enter a valid email')
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(6, 'Password must have at least 6 characters')
    .label('Password'),
  confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Confirmation password must match password'),
});

const SignInScreen = ({ navigation}) => {
  const [signInError, setSignInError] = useState('');


  const handleOnSubmit = (values) => {
    const { email, password, confirm } = values;
    confirm ? firebase.auth().createUserWithEmailAndPassword(email, password) : firebase.auth().signInWithEmailAndPassword(email, password);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Form
          validationSchema={validationSchema}
          initialValues={{
            email: '',
            password: '',
            confirm: '',
          }}
          onSubmit={ values => handleOnSubmit(values)}
        >
          <Form.Field
            name="email"
            leftIcon="email"
            placeholder="Enter email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <Form.Field
            name="password"
            leftIcon="lock"
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
          <Form.Field
            name="confirm"
            leftIcon="lock"
            placeholder="Confirm password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
          <Form.Button title={values => values.confirm ? 'Sign up' : 'Log in'} />
          {<Form.ErrorMessage error={signInError} visible={true} />}
        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ccccb3",
  },
  field: {
    height: 40,
    width: 300,
    padding: 5,
    backgroundColor: "white",
  },
  fieldContainer: {
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  label: {
    fontWeight: "bold",
  },
});

export default SignInScreen;
