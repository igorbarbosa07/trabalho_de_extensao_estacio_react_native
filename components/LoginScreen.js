import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform, 
  ImageBackground, 
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

const LoginScreen = ({ onLogin, onCancel, message, setMessage }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!username || !password) {
      setMessage('Por favor, preencha todos os campos');
      return;
    }
    onLogin(username, password);
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/474x/20/eb/e7/20ebe703ab49b4dbc5cc38b4a8fec4ff.jpg' }}
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoiding}
        keyboardVerticalOffset={Platform.OS === 'ios' ? -150 : -100}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.overlay}>
            <View style={styles.formContainer}>
              <Text style={styles.title}>
                <Ionicons name="lock-closed" size={24} color="#5D4037" /> Acesso Restrito
              </Text>
              
              {message && (
                <View style={[
                  styles.messageContainer,
                  { backgroundColor: message.includes('sucesso') ? '#388E3C' : '#D32F2F' }
                ]}>
                  <Text style={styles.messageText}>{message}</Text>
                </View>
              )}
              
              <TextInput
                style={styles.input}
                placeholder="Usuário"
                value={username}
                onChangeText={(text) => {
                  setUsername(text);
                  setMessage('');
                }}
                autoCapitalize="none"
                autoCorrect={false}
              />
              
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Senha"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={(text) => {
                    setPassword(text);
                    setMessage('');
                  }}
                  autoCapitalize="none"
                />
                <TouchableOpacity 
                  style={styles.eyeButton}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons 
                    name={showPassword ? "eye-off" : "eye"} 
                    size={20} 
                    color="#555" 
                  />
                </TouchableOpacity>
              </View>
              
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Ionicons name="log-in" size={18} color="white" />
                <Text style={styles.buttonText}>Entrar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.button, styles.cancelButton]} 
                onPress={onCancel}
              >
                <Ionicons name="arrow-back" size={18} color="white" />
                <Text style={styles.buttonText}>Voltar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  keyboardAvoiding: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    minHeight: height,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: 20,
    justifyContent: 'center',
  },
  formContainer: {
    maxWidth: 500,
    width: '100%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#5D4037',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  eyeButton: {
    padding: 15,
  },
  button: {
    backgroundColor: '#5D4037',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#757575',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  messageContainer: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  messageText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default LoginScreen;