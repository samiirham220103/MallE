import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { fonts } from '../assets/fonts';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import signInWithEmailAndPassword dari Firebase

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
        .then((userCredential) => {
          Alert.alert('Success', 'Login successful');
          navigation.navigate('Home');
        })
        .catch((error) => {
          const errorMessage = error.message;
          Alert.alert('Login Failed', errorMessage);
        });
    } else {
      Alert.alert('Error', 'Please fill in both fields');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      <Text style={styles.welcomeText}>Welcome{'\n'}Back!</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#626262" solid />
        <TextInput
          style={[styles.input, { color: '#626262' }]}
          placeholder="Email"
          placeholderTextColor="#676767"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#626262" solid />
        <TextInput
          style={[styles.input, { color: '#626262' }]}
          placeholder="Password"
          placeholderTextColor="#676767"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Icon name="eye" size={20} color="#626262" />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* Or Continue With */}
      <Text style={styles.orText}>- OR Continue With -</Text>

      {/* Social Media */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialBorder}>
          <Image
            source={require('../assets/images/google.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBorder}>
          <Image
            source={require('../assets/images/apple.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBorder}>
          <Image
            source={require('../assets/images/facebook.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Sign Up */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Create An Account</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    padding: 30,
  },
  welcomeText: {
    fontSize: 48,
    color: '#000000',
    marginBottom: 20,
    textAlign: 'left',
    fontFamily: fonts.primary.bold,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#a8a8a9',
    elevation: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
    fontFamily: fonts.primary.regular,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  forgotText: {
    fontSize: 14,
    color: '#3CC7F5',
    fontFamily: fonts.primary.regular,
    textDecorationLine: 'underline',
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: '#3CC7F5',
    paddingVertical: 15,
    marginVertical: 20,
    borderRadius: 6,
    elevation: 3,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
  orText: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 20,
    color: '#575757',
    fontFamily: fonts.primary.regular,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  socialBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d8f4fd',
    borderRadius: 30,
    padding: 10,
    width: 60,
    height: 60,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#3cc7f5',
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    fontSize: 14,
    color: '#575757',
    fontFamily: fonts.primary.regular,
  },
  signupLink: {
    fontSize: 14,
    marginLeft: 5,
    color: '#3cc7f5',
    fontFamily: fonts.primary.regular,
    textDecorationLine: 'underline',
  },
});

export default SignIn;