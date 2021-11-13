import React, { Component } from 'react'
import { Alert, Text, View, TextInput, TouchableOpacity ,StyleSheet} from 'react-native';

export default class Suma extends Component {
    constructor(props) {

        super(props)
    
        this.state = {
          number1:'',
          number2:'',
          result: 0
        }
    
      }
    
    operar = (e,type)=>{
      let number1 = parseInt(this.state.number1)
      let number2 = parseInt(this.state.number2)
      let result = 0
      switch(type){
        case 's':
          result = number1 && number2 ? number1+number2 : 0
          break
        case 'r':
          result = number1 && number2 ? number1-number2 : 0
          break
        case 'm':
          result = number1 && number2 ? number1*number2 : 0
          break
        case 'd':
          result = number1 && number2 ? number1/number2 : 0
          break
        default:
          result=0
          break
      }
      this.setState({ result:  result})
    }
    
    render() {
      return (
        <View style={styles.container}>
          <Text style={{textAlign:'center', fontSize: 18,}}> Sumar </Text>

          <Text style={styles.InputStyle}> Numero 1: {this.state.number1} </Text>
          <TextInput
            placeholder="Digite la identificación"
            onChangeText={(textInputValue) => this.setState({ number1: textInputValue })}
            underlineColorAndroid='transparent'
            style={styles.styleInput}
            value={this.state.number1}
          />


          <Text style={styles.InputStyle}> Numero 2: {this.state.number2} </Text>
          <TextInput
            placeholder="Digite la identificación"
            onChangeText={textInputValue => {
              this.setState({ number2: textInputValue })
            }}
            underlineColorAndroid='transparent'
            style={styles.styleInput}
            value={this.state.number2}
          />
            <View style={styles.containerButton}> 
              <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={e=>this.operar(e,'s')}>
                <Text style={{textAlign:'center'}}> Sumar </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={e=>this.operar(e,'r')}>
                <Text style={{textAlign:'center'}}> Restar </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={e=>this.operar(e,'m')}>
                <Text style={{textAlign:'center'}}> Multiplicar </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={e=>this.operar(e,'d')}>
                <Text style={{textAlign:'center'}}> Dividir </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.InputStyle}> Resultado: {this.state.result} </Text>
        </View>
      )
    }
}


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      paddingTop: 30,
      backgroundColor: '#fff'
    },
    containerButton:{ 
      justifyContent: 'center',
      paddingTop: 30,
      flexWrap:'wrap',
      flexDirection:'row',
    },
    styleInput: {
      textAlign: 'center',
      marginBottom: 7,
      height: 40,
      // borderBottomWidth: 1,
      // borderBottomColor: '#8BC34A',
      width: '80%',
      borderWidth: 1,
      borderColor: '#8BC34A',
      borderRadius: 5,
    },
  
    TouchableOpacityStyle: {
      padding: 10,
      margin: 5,
      borderRadius: 5,
      marginBottom: 7,
      width: '45%',
      // height: 40,
      backgroundColor: '#4CAF50'
    },
  
    InputStyle: { 
      fontSize: 15,
      textAlign: 'center',
      marginBottom: 7 
    },
  });
  