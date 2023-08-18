import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import logoImage from '../../../Assets/index';

const loginButtonPressed = () => {
  console.log('button Pressed!!!');
};

const Login = () => {
  return (
    <SafeAreaView style={Styles.scafflodContainer}>
      <View style={Styles.imageContainer}>
        <Image source={logoImage} />
        <Text style={Styles.imageText}>Dukh Dard Peeda!!!</Text>
      </View>
      <View style={Styles.mainContainer}>
        <View style={Styles.inputFieldContainer}>
          <Text>Login Id</Text>
          <TextInput style={Styles.inputFieldStyle} />
        </View>
        <View style={Styles.inputFieldContainer}>
          <Text>Password</Text>
          <TextInput secureTextEntry={true} style={Styles.inputFieldStyle} />
        </View>
        <TouchableOpacity onPress={loginButtonPressed}>
          <View style={Styles.buttonStyle}>
            <Text style={Styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  scafflodContainer: {
    flex: 1,
  },
  imageContainer: {position: 'absolute', marginTop: 60},
  imageText: {textAlign: 'center'},
  mainContainer: {
    flex: 1,
    width: 280,
    marginTop: 80,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputFieldStyle: {
    borderWidth: 1,
    width: '100%',
    padding: 8,
    borderRadius: 10,
  },
  inputFieldContainer: {marginVertical: 8.0},
  buttonStyle: {
    backgroundColor: '#504099',
    width: 300,
    padding: 16,
    margin: 16,
    marginTop: 80,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {color: 'white', fontSize: 20},
});

export default Login;
