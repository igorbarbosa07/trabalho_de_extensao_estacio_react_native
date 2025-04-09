import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles';

export default function AvisosList({ avisos, isAdmin, onAddAviso, onDeleteAviso }) {
  const [novoAviso, setNovoAviso] = useState({ 
    titulo: '', 
    data: '', 
    horario: '',
    descricao: '' 
  });
  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState({});

  const formatDate = (input) => {
    const numbers = input.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 4) return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)}`;
  };

  const formatTime = (input) => {
    const numbers = input.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    return `${numbers.slice(0, 2)}:${numbers.slice(2, 4)}`;
  };

  const handleDateChange = (text) => {
    setNovoAviso({...novoAviso, data: formatDate(text)});
  };

  const handleTimeChange = (text) => {
    setNovoAviso({...novoAviso, horario: formatTime(text)});
  };

  const validateForm = () => {
    const newErrors = {};
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    const timeRegex = /^\d{2}:\d{2}$/;

    if (!novoAviso.titulo) newErrors.titulo = 'Título é obrigatório';
    if (!novoAviso.descricao) newErrors.descricao = 'Descrição é obrigatória';
    
    if (!novoAviso.data) {
      newErrors.data = 'Data é obrigatória';
    } else if (!dateRegex.test(novoAviso.data)) {
      newErrors.data = 'Formato inválido (DD/MM/AAAA)';
    }
    
    if (!novoAviso.horario) {
      newErrors.horario = 'Horário é obrigatório';
    } else if (!timeRegex.test(novoAviso.horario)) {
      newErrors.horario = 'Formato inválido (HH:MM)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddAviso = () => {
    if (!validateForm()) return;
    
    onAddAviso({
      titulo: novoAviso.titulo,
      dataHorario: `${novoAviso.data} às ${novoAviso.horario}`,
      descricao: novoAviso.descricao
    });
    
    setNovoAviso({ titulo: '', data: '', horario: '', descricao: '' });
    setShowForm(false);
    setErrors({});
  };

  const renderAviso = ({ item }) => (
    <View style={styles.avisoCard}>
      <View style={styles.avisoHeader}>
        <Text style={styles.avisoTitle}>{item.titulo}</Text>
        {item.dataHorario && <Text style={styles.avisoDate}>{item.dataHorario}</Text>}
      </View>
      <Text style={styles.avisoDescription}>{item.descricao}</Text>
      {isAdmin && (
        <TouchableOpacity 
          style={styles.deleteButton}
          onPress={() => onDeleteAviso(item.id)}
        >
          <Text style={{ color: 'white' }}>Remover Aviso</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.content}>
      <Text style={[styles.titulo, { fontSize: 18, textAlign: 'center', marginBottom: 15 }]}>
        Avisos da Comunidade
      </Text>
      
      <FlatList
        data={avisos}
        keyExtractor={item => item.id}
        renderItem={renderAviso}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 20, color: '#666' }}>
            Nenhum aviso cadastrado ainda.
          </Text>
        }
      />
      
      {isAdmin && !showForm && (
        <TouchableOpacity 
          style={styles.button}
          onPress={() => setShowForm(true)}
        >
          <Ionicons name="add-circle" size={20} color="white" />
          <Text style={styles.buttonText}>  Adicionar Aviso</Text>
        </TouchableOpacity>
      )}
      
      {isAdmin && showForm && (
        <View style={styles.form}>
          <Text style={[styles.formTitle, { textAlign: 'center' }]}>Novo Aviso</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Título *"
            value={novoAviso.titulo}
            onChangeText={text => setNovoAviso({...novoAviso, titulo: text})}
          />
          {errors.titulo && <Text style={styles.errorText}>{errors.titulo}</Text>}
          
          <View style={styles.formRow}>
            <View style={styles.formColumn}>
              <TextInput
                style={styles.input}
                placeholder="DD/MM/AAAA *"
                value={novoAviso.data}
                onChangeText={handleDateChange}
                keyboardType="numeric"
                maxLength={10}
              />
              {errors.data && <Text style={styles.errorText}>{errors.data}</Text>}
            </View>
            
            <View style={styles.formColumn}>
              <TextInput
                style={styles.input}
                placeholder="HH:MM *"
                value={novoAviso.horario}
                onChangeText={handleTimeChange}
                keyboardType="numeric"
                maxLength={5}
              />
              {errors.horario && <Text style={styles.errorText}>{errors.horario}</Text>}
            </View>
          </View>
          
          <TextInput
            style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
            placeholder="Descrição *"
            multiline
            value={novoAviso.descricao}
            onChangeText={text => setNovoAviso({...novoAviso, descricao: text})}
          />
          {errors.descricao && <Text style={styles.errorText}>{errors.descricao}</Text>}
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity 
              style={[styles.button, { flex: 1, marginRight: 5 }]}
              onPress={handleAddAviso}
            >
              <Text style={styles.buttonText}>Publicar Aviso</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.button, { flex: 1, marginLeft: 5, backgroundColor: '#777' }]}
              onPress={() => {
                setShowForm(false);
                setErrors({});
              }}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}