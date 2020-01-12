import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
`;

export const Form = styled.View`
  align-items: center;
  margin-top: 30px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  margin-right: 20px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const ButtonDelete = styled(Button)`
  margin-top: 10px;
  background: #b22222;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
