import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #ddd;
`;

export const Text = styled.Text`
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #00ced1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 2px 10px;
`;
