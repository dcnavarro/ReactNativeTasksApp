import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Añade una tarea" />
        <Button title="+" color="#1D9225" />
      </View>
      <View style={styles.tasksContainer}>
        <Text style={styles.title}>Tareas pendientes</Text>
      </View>
      <View style={styles.taskContainer}>
        <Text style={styles.taskText}>Tarea de prueba</Text>
        <Button title="x" color="#C71919"></Button>
      </View>
      <View style={styles.taskContainer}>
        <Text style={styles.taskText}>Tarea de prueba</Text>
        <Button title="x" color="#C71919"></Button>
      </View>
      <View style={styles.taskContainer}>
        <Text style={styles.taskText}>Tarea de prueba</Text>
        <Button title="x" color="#C71919"></Button>
      </View>
      <View style={styles.taskContainer}>
        <Text style={styles.taskText}>Tarea de prueba</Text>
        <Button title="x" color="#C71919"></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#464646",
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: "row",
    paddingTop: 60,
    paddingBottom: 40,
    justifyContent: "space-between",
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#ccc",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    width: "90%",
  },
  tasksContainer: {
    paddingTop: 15,
    gap: 20,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 16,
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  taskText: {
    color: "#fff",
  },
});
