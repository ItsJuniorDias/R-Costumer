import React, {Component} from 'react';
import { View } from 'react-native';
import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Text, SubmitButton } from './styles';

export default class Main extends Component {


 handleNavigate = () => {
   const {navigation } = this.props;

   navigation.navigate('User');
 };

 componentDidMount() {
   this.loadUsers();
 }

 loadUsers = async () => {
   const response = await api.get('/users');

   const { docs } = response.data;
   
   console.log(docs);
 }

 render() {
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
}

Main.navigationOptions = {
  title: 'Usuários',

}
