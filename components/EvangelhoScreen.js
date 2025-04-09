import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles';

const EvangelhoScreen = ({ isConnected }) => {
  const [showWebView, setShowWebView] = useState(false);
  const [loading, setLoading] = useState(false);

  const LITURGIA_URL = 'https://liturgia.cancaonova.com/pb/';

  const handleOpenWebView = () => {
    if (!isConnected) return;
    setShowWebView(true);
  };

  const handleGoBack = () => {
    setShowWebView(false);
  };

  if (showWebView) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView 
          source={{ uri: LITURGIA_URL }}
          style={{ flex: 1 }}
          startInLoadingState={true}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          allowsBackForwardNavigationGestures={true}
        />
        
        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#5D4037" />
          </View>
        )}

        <TouchableOpacity 
          style={localStyles.backButton}
          onPress={handleGoBack}
        >
          <Ionicons name="arrow-back" size={24} color="#FFF" />
          <Text style={localStyles.backButtonText}>Voltar para o App</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <View style={[styles.content, { justifyContent: 'center' }]}>
      <Text style={[styles.titulo, { fontSize: 22, textAlign: 'center', marginBottom: 30 }]}>
        Evangelho do Dia
      </Text>

      <View style={localStyles.imageContainer}>
        <Ionicons name="calendar" size={80} color="#5D4037" />
      </View>

      <TouchableOpacity
        style={[localStyles.actionButton, !isConnected && { backgroundColor: '#9E9E9E' }]}
        onPress={handleOpenWebView}
        disabled={!isConnected}
      >
        <Ionicons name="calendar" size={24} color="white" />
        <Text style={localStyles.actionButtonText}>
          {isConnected ? 'Acessar Liturgia Diária' : 'Sem conexão com a internet'}
        </Text>
      </TouchableOpacity>

      <Text style={localStyles.infoText}>
        {isConnected 
          ? 'Você será direcionado para a liturgia diária da Canção Nova dentro do aplicativo.'
          : 'Conecte-se à internet para acessar a Liturgia Diária.'}
      </Text>
    </View>
  );
};

const localStyles = StyleSheet.create({
  actionButton: {
    backgroundColor: '#5D4037',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  infoText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    paddingHorizontal: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#5D4037',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  }
});

export default EvangelhoScreen;