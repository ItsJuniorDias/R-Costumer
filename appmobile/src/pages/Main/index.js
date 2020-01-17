import React, {Component} from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Text, SubmitButton } from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      userInfo: {},
      docs: [],
      page: 1
    }
  }



 handleNavigate = () => {
   const {navigation } = this.props;

   navigation.navigate('User');
 };

 componentDidMount() {
   this.loadUsers();
 }

 loadUsers = async (page = 1) => {
   const response = await api.get(`/users?page=${page}`);

   const { docs, ... userInfo } = response.data;
   
   this.setState({
     docs:[ ...this.state.docs, ...docs], 
     userInfo,
     page
    });
 }

 loadMore = () => {
   const { page, userInfo } = this.state;

   if(page === userInfo.pages) return;

   const pageNumber = page + 1;

   this.loadUsers(pageNumber);
 }

 renderItem = ({item}) => (
   <Container style={styles.userContainer}> 
     <Text style={styles.userNome}>Nome - {item.nome} </Text>
     <Text style={styles.userCpf}>CPF - {item.cpf}</Text>
      <TouchableOpacity style={styles.userButton} onPress={this.handleNavigate}> 
       <Text style={styles.userText}>Editar cadastro</Text>
      </TouchableOpacity>
   </Container>
 )

 render() {
  return (
    <Container> 
      <Form style={styles.userContainer}>
      <Text>Adicione um usuário</Text>
      <SubmitButton onPress={this.handleNavigate}> 
        <Icon name="person-add" size={25} color="#fff"/>
      </SubmitButton>
      </Form>

      <View style={styles.container}> 
        <FlatList
          data={this.state.docs}
          keyExtractor = {item => item._id}
          renderItem={this.renderItem}
          onEndReached={this.loadMore}
        /> 
      </View>
    </Container>
  );
 }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
  },
  
  userContainer:{
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 20,
    marginBottom: 20
  },

  userNome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },

  userCpf: {
    fontSize: 16,
    color: "#999",
    marginTop: 5,
    lineHeight: 24,
  },

  userButton: {
    height: 50,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#3d3dff',
    backgroundColor: 'transparent',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
   
  userText: {
    fontSize: 20,
    color: "#3d3dff",
    fontWeight: "bold",
    marginTop: 5,
  }

})


Main.navigationOptions = {
  title: 'Usuários',

}
