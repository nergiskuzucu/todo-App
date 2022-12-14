import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  todo: {
    backgroundColor: '#e34b5f',
    margin: 10,
    marginBottom: 5,
    padding: 10,
    borderRadius: 10,
  },
  doneTodo: {
    backgroundColor: '#948486',
    margin: 10,
    marginBottom: 5,
    padding: 10,
    borderRadius: 10,
  },
  todoText:{
    color:"white"
  },
  doneTodoText:{
      color:"#ede4e5",
      textDecorationLine:"line-through"
  }
});