import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Text, SubmitButton } from './styles';

function Main() {
 handleNavigate = () => {
   const {navigation } = this.props;

   navigation.navigate('User');
 };

 useEffect(() => {
   async function loadUsers() {
     const response = await api.get('/users');

     loadUsers(response.data);
   }
   loadUsers();
 }, [])

  return (
    <Container> 
      <Form>
      <Text>Adicione um usuário</Text>
      <SubmitButton onPress={this.handleNavigate}> 
        <Icon name="person-add" size={25} color="#fff"/>
      </SubmitButton>
      </Form>
    </Container>
  );
}

export default Main;

Main.navigationOptions = {
  title: 'Usuários',

}
