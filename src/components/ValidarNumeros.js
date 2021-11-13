import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

export default class ValidarNumeros extends Component {

  constructor(props) {
    super(props)

    this.state = {
        text: '',
    }

  }

  validarNumeros= (text) =>{
      if(/^\d+$/.test(text)){
        this.setState({text:text})
      }else{
        this.setState({text:''})
      }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput  
                    style={styles.textInput}
                    keyboardType='numeric'
                    onChangeText={this.validarNumeros}
                    value={this.state.text}
                    placeholder='Numeros '
                ></TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput:{
      textAlign: 'center',
      width: '50%',
      marginBottom: 7,
      height: 40,
      borderWidth: 1,
      borderColor: '#FF5722',
      borderRadius: 5,
  
    },
    buttonStyle:{
  
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 5,
      marginBottom: 7,
      width: '50%',
      backgroundColor: '#00BCD4' 
  
    },
    titleStyle:{
      color: '#fff',
      textAlign: 'center',
      fontSize: 16
    },
  });
