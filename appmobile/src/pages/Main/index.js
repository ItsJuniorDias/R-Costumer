import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Text, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container> 
      <Form>
      <Text>Adicione um usuário</Text>
      <SubmitButton> 
        <Icon name="person-add" size={25} color="#fff"/>
      </SubmitButton>
      </Form>
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Usuários',

}
