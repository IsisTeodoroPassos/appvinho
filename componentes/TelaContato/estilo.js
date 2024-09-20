import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    card: {
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      padding: 20,
      marginBottom: 15,
      borderRadius: 10,
    },
    icon: {
      width: 40,
      height: 40,
      marginBottom: 10,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    info: {
      fontSize: 14,
      color: '#666',
    },
  });
  
export default styles;