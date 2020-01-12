import React from 'react';
import { View } from 'react-native';

import Background from '../../components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  ButtonDelete,
  ContainerButtons,
} from './styles';

export default function User() {
  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome Completo"
            returnKeyType="next"
          />

          <FormInput
            icon="fingerprint"
            keyboardType="number-pad"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="CPF"
            returnKeyType="next"
          />

          <FormInput
            icon="date-range"
            keyboardType="number-pad"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Data Nascimento"
            returnKeyType="next"
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Email"
            returnKeyType="next"
          />

          <FormInput
            icon="call"
            keyboardType="number-pad"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Telefone"
            returnKeyType="next"
          />

          <FormInput
            icon="near-me"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Endereço"
            returnKeyType="next"
          />
          <ContainerButtons>
            <SubmitButton>Salvar</SubmitButton>
            <ButtonDelete>Deletar</ButtonDelete>
          </ContainerButtons>
        </Form>
      </Container>
    </Background>
  );
}

User.navigationOptions = {
  title: 'Cadastro de clientes',
};
