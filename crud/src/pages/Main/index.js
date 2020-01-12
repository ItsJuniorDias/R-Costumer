/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';

import { Container, Form, SubmitButton, Text } from './styles';

export default class Main extends Component {
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
        </Container>
      </Background>
    );
  }
}

Main.navigationOptions = {
  title: 'Listagem de clientes',
};
