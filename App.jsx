import React, { useState} from 'react';
import { Alert, SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
const [tasks, setTasks] = useState([
  'Do laundry',
  'Go to gym',
  'Walk dog'
]);

 const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

 const addTask = (taskText) => {
    const trimmedTask = taskText.trim();
    if (trimmedTask === '') {
      Alert.alert('Error', 'Task cannot be empty.');
      return;
    }
    if (tasks.some((task) => task.task.toLowerCase() === trimmedTask.toLowerCase())) {
      Alert.alert('Error', 'Task already exists.');
      return;
    }
    setTasks([...tasks, { task: trimmedTask, completed: false }]);
  };

  //avoiding the duplicates
  if (tasks.includes(taskText.trim())){
    Alert.alert('This is a Duplicate Task', 'This task already exists.');
    return;
  }


return (
  <SafeAreaView style={styles.container}>
    <ToDoList tasks={tasks}/>
    <ToDoForm addTask={addTask}/>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
    padding: 16,
  },
});

export default App;