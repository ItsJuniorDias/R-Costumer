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
  color: #fff;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #00ced1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 2px 10px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;
export const Nome = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;
export const CPF = styled.Text`
  font-size: 18px;
  line-height: 18px;
  color: #333;
  margin-top: 10px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  width: 200px;
  align-items: stretch;
  border-radius: 4px;
  background: #00ced1;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
