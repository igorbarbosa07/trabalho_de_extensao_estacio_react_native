import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles';

export default function AdminPanel() {
  return (
    <ScrollView style={[styles.content, { padding: 15 }]}>
      <Text style={[styles.formTitle, { fontSize: 18, marginBottom: 20 }]}>Painel Administrativo</Text>
      
      <View style={styles.instructionCard}>
        <Text style={[styles.titulo, { marginBottom: 10 }]}>
          <Ionicons name="information-circle" size={18} color="#5D4037" /> Instruções:
        </Text>
        <Text style={{ marginBottom: 8 }}>
          1. Use a aba "Avisos" para adicionar comunicados
        </Text>
        <Text style={{ marginBottom: 8 }}>
          2. Preencha os campos obrigatórios (*)
        </Text>
        <Text>
          3. Data e horário são opcionais
        </Text>
      </View>
      
      <View style={styles.instructionCard}>
        <Text style={[styles.titulo, { marginBottom: 10 }]}>
          <Ionicons name="bulb" size={18} color="#5D4037" /> Dicas:
        </Text>
        <Text style={{ marginBottom: 8 }}>
          • Para eventos recorrentes, use "Todo domingo" no campo de data
        </Text>
        <Text style={{ marginBottom: 8 }}>
          • Destaque avisos importantes começando com "[IMPORTANTE]"
        </Text>
        <Text style={{ marginBottom: 8 }}>
          • Para missas, inclua local e qualquer informação adicional na descrição
        </Text>
        <Text>
          • Você pode editar um aviso removendo e criando um novo
        </Text>
      </View>
      
      <View style={styles.instructionCard}>
        <Text style={[styles.titulo, { marginBottom: 10 }]}>
          <Ionicons name="time" size={18} color="#5D4037" /> Exemplos:
        </Text>
        <Text style={{ marginBottom: 8, fontStyle: 'italic' }}>
          Título: "Missa Dominical"
        </Text>
        <Text style={{ marginBottom: 8, fontStyle: 'italic' }}>
          Data: "Todo domingo" | Horário: "09:00"
        </Text>
        <Text style={{ fontStyle: 'italic' }}>
          Descrição: "Missa comunitária na capela principal"
        </Text>
      </View>
    </ScrollView>
  );
}