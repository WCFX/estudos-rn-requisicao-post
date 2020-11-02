import { StyleSheet } from 'react-native';


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  containerInputs: {
    marginTop: 30,
    marginLeft: 30,
  },
  titleText: {
    color: '#ccc',
    fontSize: 22,
    marginBottom: 8,
  },
  input:{
    marginBottom: 20,
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#555',
    color: '#FFF',
    fontSize: 18,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#555',
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#f00555',
    borderRadius: 8,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#f9f9f9',
    textAlign: 'center',
    fontSize: 22,
    letterSpacing: 1,
  },
  
});


export default style;