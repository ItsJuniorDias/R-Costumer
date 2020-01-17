import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, SubmitButton, Input, ViewIcon } from './styles';

export default function User() {
  return (
    <Container> 
      <Form>
        <Icon name="person-outline" size={35} color="#333"/>
    
        <Input 
          keyboardType="default"
          autoCorrect={false}
          placeholder= "Digite seu nome"
        />
        
        <Icon name="date-range" size={35} color="#333"/>
        <Input 
          keyboardType="default"
          autoCorrect={false}
          placeholder= "Data Nascimento"
        />

        <SubmitButton onPress={() =>{}}>

        </SubmitButton>
      </Form>
    </Container>
  );
}



User.navigationOptions = {
  title: 'Cadastar Usuários',

}
