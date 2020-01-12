/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { SQlite, openDatabase } from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';

import { Container, Form, SubmitButton, Text, List } from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Nome: '',
      dataNasc: '',
    };
  }

  handleNavigate = () => {
    const { navigation } = this.props;

    navigation.navigate('User');
  };

  render() {
    return (
      <Background>
        <Container>
          <Form>
            <Text>Adicione um cliente</Text>
            <SubmitButton onPress={this.handleNavigate}>
              <Icon name="person-add" size={20} color="#fff" />
            </SubmitButton>
          </Form>
          <Text> {`O nome do cliente é ${this.state.Nome}`}</Text>
        </Container>
      </Background>
    );
  }
}

Main.navigationOptions = {
  title: 'Listagem de clientes',
};
