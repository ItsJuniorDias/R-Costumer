import styled from 'styled-components/native';
import { RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 0 15px;
  margin-top: 20px;
`;


export const Form = styled.View`
 flex-direction: column;
 padding-bottom: 20px;
 border-bottom-width: 1px;
 border-color: #ddd;
`;

export const Text = styled.Text`
 font-size: 20px;
 color: #333;
 height: 40px; 
 padding: 0 15px;
`;

export const SubmitButton = styled(RectButton)`
 justify-content: center;
 align-items: center;
 background: #3d3dff;
 border-radius: 4px;
 margin-left: 120px;
 padding: 0 8px;
`;

export const Input = styled.TextInput`
 font-size: 15px;
 margin-left: 50px;
 color: #333;
`;

