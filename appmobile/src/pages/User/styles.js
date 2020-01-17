import styled from 'styled-components/native';
import { RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 0 15px;
  margin-top: 50px;
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
 color: #fff;
 margin-top: 5px;
`;

export const SubmitButtonSalvar = styled(RectButton)`
 justify-content: center;
 align-items: center;
 background: #3d3dff;
 border-radius: 4px;
 margin-left: 20px;
 padding: 0 10px;
 margin-top: 50px;
`;

export const SubmitButtonDeletar = styled(RectButton)`
 justify-content: center;
 align-items: center;
 background: #ff1400;
 border-radius: 4px;
 margin-left: 20px;
 padding: 0 10px;
 margin-top: 10px;
`;


export const Input = styled.TextInput`
 justify-content: center;
 align-items: center;
 font-size: 15px;
 margin-left: 40px;
 margin-top: -30px;
 color: #333;
 padding: 0 10px 20px 10px;
`;

