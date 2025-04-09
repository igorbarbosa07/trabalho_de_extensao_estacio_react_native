import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.8);

  useEffect(() => {
    // Animação de fade-in e scale
    Animated.parallel([
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true
        }
      ),
      Animated.spring(
        scaleAnim,
        {
          toValue: 1,
          friction: 2,
          useNativeDriver: true
        }
      )
    ]).start();

    // Temporizador para navegar para a tela principal
    const timer = setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.logo, { 
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }]
        }]}
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0IqKgxw7bWA3m8QgvBffgibuMOeVcfVllw&s' }}
      />
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
        Santuário Nossa Senhora da Vitória
      </Animated.Text>
      <Animated.Text style={[styles.subtitle, { opacity: fadeAnim }]}>
        Seja bem-vindo(a)
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D4037',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 30,
    borderWidth: 3,
    borderColor: 'white',
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.8,
  },
});

export default SplashScreen;