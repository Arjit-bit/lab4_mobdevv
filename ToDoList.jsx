import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

function ToDoList({tasks}) {
  return (
    <ScrollView style={styles.listContainer}>
         <Text style={styles.heading}>My ToDo List</Text>
      <Pressable>
        <View style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>Do laundry</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.task}>
          <Text
              style={[
                styles.taskText,
                item.completed && styles.completedTask, // Apply strikethrough for completed tasks
              ]}
            >
              • {item.task}
            </Text>
        </View>
      </Pressable>
      <Pressable>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 20,
    textAlign: 'center',
  },
  taskItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
  },
  completed: {
    backgroundColor: '#e8f5e9', 
  },
  taskText: {
    fontSize: 16,
    color: '#333333', 
  },
});

export default ToDoList;