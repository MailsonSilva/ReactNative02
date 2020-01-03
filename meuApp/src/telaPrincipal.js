import React, {Component} from 'react';
import { View, Text, TextInput, StyleSheet, Image, Button } from 'react-native';


class telaPrincipal extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            input: ''
        };     
        this.Entrar = this.Entrar.bind(this);
    }   

    Entrar(){
        if(this.state.input === ''){
            alert('Digite seu nome!');
            this.setState({nome: ''});
            return;
        }
        this.setState({nome: 'Olá: ' + this.state.input})
    }

    render(){
        return(
            <View style={styles.containner}>
                <TextInput 
                    style={styles.input}
                    placeholder="Digite seu nome"
                    underlineColorAndroid="transparent"
                    onChangeText={ (texto) => this.setState({input: texto})}
                />
            
            <Button 
                title='Entrar'
                onPress={this.Entrar}
            />   
            <Text style={styles.texto1}> {this.state.nome}</Text>
                
            </View>
        );
    }
}

export default telaPrincipal;

const styles = StyleSheet.create({
    containner: {
        flex: 1
    },
    input: {             
        padding: 10,
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#222',
        margin: 15,
        height: 45
    },
    texto1: {        
        color: '#f242f5',
        textAlign: "center",
        fontSize: 30
    }
});