import React, { useState} from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ToDoForm({addTask}) {
  const [taskText, setTaskText] = useState('');

  const handleAdd = () => {
    addTask(taskText);
    setTaskText('');
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={setTaskText(text)}
        value={taskText}
        placeholderTextColor="#999999" 
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Ionicons name="add-circle" size={40} color="#6200ee" />
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#6200ee', 
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    backgroundColor: '#ffffff', 
    fontSize: 16,
    color: '#333333', 
  },
  button: {
    borderRadius: 10,
    overflow: 'hidden', 
  },
});

export default ToDoForm;