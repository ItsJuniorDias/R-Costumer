import React, {Component} from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Text, SubmitButton } from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      docs: [],
    }
  }


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
   
   this.setState({docs});
 }

 renderItem = ({item}) => (
   <View> 
     <Text>Nome - {item.nome} </Text>
     <Text>CPF - {item.cpf}</Text>
      <TouchableOpacity onPress={() => {}}> 
       <Text>Editar cadastro</Text>
      </TouchableOpacity>
   </View>
 )

 render() {
  return (
    <Container> 
      <Form>
      <Text>Adicione um usuário</Text>
      <SubmitButton onPress={this.handleNavigate}> 
        <Icon name="person-add" size={25} color="#fff"/>
      </SubmitButton>
      </Form>

      <View> 
        <FlatList
          data={this.state.docs}
          keyExtractor = {item => item._id}
          renderItem={this.renderItem}
        /> 
      </View>
    </Container>
  );
 }
}

Main.navigationOptions = {
  title: 'Usuários',

}
