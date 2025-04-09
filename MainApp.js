import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import AvisosList from './components/AvisosList';
import AdminPanel from './components/AdminPanel';
import LoginScreen from './components/LoginScreen';
import BibliaScreen from './components/BibliaScreen';
import EvangelhoScreen from './components/EvangelhoScreen';
import { styles } from './styles';
import NetInfo from '@react-native-community/netinfo';

const MainApp = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [activeScreen, setActiveScreen] = useState('avisos');
  const [avisos, setAvisos] = useState([]);
  const [message, setMessage] = useState('');
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    // Configurar notificações
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });

    // Verificar conexão
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      setMessage(state.isConnected ? 'Conectado' : 'Sem conexão');
      setTimeout(() => setMessage(''), 3000);
    });

    // Carregar dados
    loadData();

    return () => unsubscribe();
  }, []);

  const loadData = async () => {
    try {
      const savedAvisos = await AsyncStorage.getItem('avisos');
      if (savedAvisos) setAvisos(JSON.parse(savedAvisos));
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  };

  const saveData = async (key, data) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
    }
  };

  const handleLogin = (username, password) => {
    if (username === 'igorbarbosa' && password === 'info..276') {
      setIsAdmin(true);
      setShowLogin(false);
      setMessage('Logado com sucesso');
      setTimeout(() => setMessage(''), 3000);
    } else {
      setMessage('Credenciais inválidas');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setMessage('Deslogado com sucesso');
    setTimeout(() => setMessage(''), 3000);
  };

  const addAviso = async (novoAviso) => {
    const updatedAvisos = [...avisos, { 
      id: Date.now().toString(), 
      ...novoAviso,
      date: new Date().toLocaleDateString('pt-BR')
    }];
    setAvisos(updatedAvisos);
    await saveData('avisos', updatedAvisos);
    
    // Enviar notificação
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Novo Aviso!',
        body: novoAviso.titulo,
        sound: true,
      },
      trigger: { seconds: 1 },
    });
  };

  const deleteAviso = (id) => {
    const updatedAvisos = avisos.filter(aviso => aviso.id !== id);
    setAvisos(updatedAvisos);
    saveData('avisos', updatedAvisos);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardAvoiding}
    >
      <View style={styles.container}>
        {!isConnected && (
          <View style={styles.connectionStatus}>
            <Text style={styles.connectionStatusText}>Sem conexão com a internet</Text>
          </View>
        )}

        {showLogin ? (
          <LoginScreen 
            onLogin={handleLogin} 
            onCancel={() => setShowLogin(false)}
            message={message}
            setMessage={setMessage}
          />
        ) : (
          <>
            <View style={styles.header}>
              <Text style={styles.headerText}>Santuário Nossa Senhora da Vitória</Text>
              {isAdmin && (
                <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                  <Ionicons name="log-out" size={20} color="white" />
                </TouchableOpacity>
              )}
            </View>

            <View style={styles.tabs}>
              <TouchableOpacity 
                style={[styles.tab, activeScreen === 'avisos' && styles.activeTab]}
                onPress={() => setActiveScreen('avisos')}
              >
                <Ionicons name="megaphone" size={18} color={activeScreen === 'avisos' ? 'white' : '#555'} />
                <Text style={[styles.tabText, activeScreen === 'avisos' && styles.activeTabText]}>Avisos</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.tab, activeScreen === 'biblia' && styles.activeTab]}
                onPress={() => setActiveScreen('biblia')}
              >
                <Ionicons name="book" size={18} color={activeScreen === 'biblia' ? 'white' : '#555'} />
                <Text style={[styles.tabText, activeScreen === 'biblia' && styles.activeTabText]}>Bíblia</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.tab, activeScreen === 'evangelho' && styles.activeTab]}
                onPress={() => setActiveScreen('evangelho')}
              >
                <Ionicons name="calendar" size={18} color={activeScreen === 'evangelho' ? 'white' : '#555'} />
                <Text style={[styles.tabText, activeScreen === 'evangelho' && styles.activeTabText]}>Evangelho</Text>
              </TouchableOpacity>

              {!isAdmin && (
                <TouchableOpacity 
                  style={[styles.tab, activeScreen === 'admin' && styles.activeTab]}
                  onPress={() => setShowLogin(true)}
                >
                  <Ionicons name="lock-closed" size={18} color={activeScreen === 'admin' ? 'white' : '#555'} />
                  <Text style={[styles.tabText, activeScreen === 'admin' && styles.activeTabText]}>Admin</Text>
                </TouchableOpacity>
              )}
            </View>

            {activeScreen === 'avisos' && (
              <AvisosList 
                avisos={avisos} 
                isAdmin={isAdmin} 
                onAddAviso={addAviso} 
                onDeleteAviso={deleteAviso} 
              />
            )}

            {activeScreen === 'biblia' && <BibliaScreen isConnected={isConnected} />}
            {activeScreen === 'evangelho' && <EvangelhoScreen isConnected={isConnected} />}
            {isAdmin && activeScreen === 'admin' && <AdminPanel />}

            {message && (
              <View style={styles.messageContainer}>
                <Text style={styles.messageText}>{message}</Text>
              </View>
            )}
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default MainApp;