import React from 'react';
import { View } from 'react-native';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function User() {
  return (
    <Form>
      <FormInput
        icon="person-outline"
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Nome Completo"
        returnKeyType="next"
      />
    </Form>
  );
}

User.navigationOptions = {
  title: 'Cadastro de clientes',
};
