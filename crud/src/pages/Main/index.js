/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, SubmitButton, Text } from './styles';

export default class Main extends Component {
  state = {
    client: [],
  };

  handleNavigate = () => {
    const { navigation } = this.props;

    navigation.navigate('User');
  };

  render() {
    const { client } = this.state;

    return (
      <Container>
        <Form>
          <Text>Adicione um cliente</Text>
          <SubmitButton onPress={this.handleNavigate}>
            <Icon name="person-add" size={20} color="#fff" />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Listagem de clientes',
};
