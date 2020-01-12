/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { SQlite, openDatabase } from 'react-native-sqlite-storage';
import { FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';

import {
  Container,
  Form,
  SubmitButton,
  Text,
  List,
  User,
  Nome,
  CPF,
  ProfileButton,
  ProfileButtonText,
} from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Clientes: [],
    };
  }

  handleNavigate = () => {
    const { navigation } = this.props;

    navigation.navigate('User');
  };

  render() {
    const { Clientes } = this.state;
    return (
      <Background>
        <Container>
          <Form>
            <Text>Adicione um cliente</Text>
            <SubmitButton onPress={this.handleNavigate}>
              <Icon name="person-add" size={20} color="#fff" />
            </SubmitButton>
          </Form>

          <Container>
            <User>
              <Nome>Alexandre Junior</Nome>
              <CPF> 449.556.578-85</CPF>
              <ProfileButton onPress={this.handleNavigate}>
                <ProfileButtonText> Editar Cadastro</ProfileButtonText>
              </ProfileButton>
            </User>
          </Container>

          <Container>
            <User>
              <Nome>Fabiana Vargas</Nome>
              <CPF>252.649.100-22</CPF>
              <ProfileButton onPress={this.handleNavigate}>
                <ProfileButtonText> Editar Cadastro</ProfileButtonText>
              </ProfileButton>
            </User>
          </Container>

          <Container>
            <User>
              <Nome>Meliana de Jesus</Nome>
              <CPF>930.181.210-07</CPF>
              <ProfileButton onPress={this.handleNavigate}>
                <ProfileButtonText> Editar Cadastro</ProfileButtonText>
              </ProfileButton>
            </User>
          </Container>
        </Container>
      </Background>
    );
  }
}

Main.navigationOptions = {
  title: 'Listagem de clientes',
};
