import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ImageBackground`
  flex: 1;
  background: #ed3238;
  padding: 32px;
  align-items: center;
`;

export const Logo = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))`
  width: 100%;
  margin: 40px 0;
  height: 80px;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 0 16px;
  font-size: 16px;
  margin-bottom: 10px;
  background: #fff;
  height: 50px;
  border-radius: 5px;
`;

export const Login = styled(RectButton)`
  background: #ac1818;
  width: 100%;
  border-radius: 8px;
  height: 50px;
  margin-top: 6px;
  justify-content: center;
`;

export const LoginText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;

export const Register = styled.TouchableOpacity``;

export const RegisterText = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-top: 10px;
`;
