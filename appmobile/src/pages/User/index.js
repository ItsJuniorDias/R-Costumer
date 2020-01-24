import React, {Component, useState} from 'react';
import { View,  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from "../../services/api";

import { 
  Container, 
  Form, 
  SubmitButton, 
  Input, 
  ViewIcon, 
  Text,
  SubmitButtonSalvar, 
  SubmitButtonDeletar } from './styles';

export default class User extends Component {
   constructor(props) {
    super(props);

    this.state = {
      newUser: "",
      users: [],
      nome: "",
      dataNascimento: "",
      cpf: "",
      celular: "",
      email: "",
      endereco: "",
      obervacoes: "",
    }
  }

  componentDidMount() {
    this.handleAddUser();
  }

  handleAddUser = async () => {

     const response = await api.post('/users', {
       nome: "Ana",
       dataNascimento: 1221,
       cpf: 13331,
       celular: 12112,
       email: "a@",
       endereco: "Rua",
       observacoes: "",
     }) 
     
     console.log(response.data);
  }

  render() {
    const {users, newUser, nome, dataNascimento, cpf, celular,email, endereco, observacoes } = this.state;

  return (
    <Container> 
      <Form>

        <Icon name="person-outline" size={35} color="#333"/>

        <Input 
          keyboardType="default"
          autoCorrect={false}
          placeholder= "Digite seu nome"
          returnKeyType="next"
          required
          value={nome}
          onChangeText={text => this.setState({ nome: text })}
        />
    
        
        <Icon name="date-range" size={35} color="#333"/>
        <Input 
          keyboardType="default"
          autoCorrect={false}
          placeholder= "Data Nascimento"
          keyboardType="number-pad"
          returnKeyType="next"
          required
          value={dataNascimento}
          onChangeText={text => this.setState({ dataNascimento: text })}
        />

        <Icon name="fingerprint" size={35} color="#333"/>
        <Input 
          keyboardType="default"
          autoCorrect={false}
          placeholder= "CPF"
          keyboardType="number-pad"
          returnKeyType="next"
          required
          value={cpf}
          onChangeText={text => this.setState({ cpf: text })}
     
        />

        <Icon name="call" size={35} color="#333"/>
        <Input 
          keyboardType="default"
          autoCorrect={false}
          keyboardType="number-pad"
          placeholder= "Celular"
          returnKeyType="next"
          required
          value={celular}
          onChangeText={text => this.setState({ celular: text })}
      
        />

        <Icon name="mail-outline" size={35} color="#333"/>
        <Input 
          keyboardType="default"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder= "Email"
          returnKeyType="next"
          required
          value={email}
          onChangeText={text => this.setState({ email: text })}
     
        />

        <Icon name="near-me" size={35} color="#333"/>
        <Input 
          keyboardType="default"
          autoCorrect={false}
          placeholder= "Endereço"
          returnKeyType="next"
          required
          value={endereco}
          onChangeText={text => this.setState({ endereco: text })}
     
        />

        <Icon name="border-color" size={35} color="#333"/>
        <Input 
          keyboardType="default"
          autoCorrect={false}
          placeholder= "Observações"
          returnKeyType="send"
          value={observacoes}
          onChangeText={text => this.setState({ observacoes: text })}
       
        />

        <SubmitButtonSalvar  onPress={this.handleAddUser}>
          <Text> Salvar </Text>
        </SubmitButtonSalvar>
        <SubmitButtonDeletar onPress={() =>{}}>
            <Text>Deletar </Text>
            </SubmitButtonDeletar>
      </Form>
    </Container>
  );
  }
}



User.navigationOptions = {
  title: 'Cadastrar Usuário',

}
