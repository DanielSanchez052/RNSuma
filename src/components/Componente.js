import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Componente extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            text: '',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text> textInComponent </Text>
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
