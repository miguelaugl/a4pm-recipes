import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import logoImg from '../../assets/full-logo.png';
import signInBackground from '../../assets/sign-in-background.jpg';

import {
  Container,
  Logo,
  Input,
  Login,
  LoginText,
  Register,
  RegisterText,
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Container source={signInBackground} blurRadius={2}>
      <Logo source={logoImg} />

      <Input
        value={email}
        onChangeText={(value) => setEmail(value)}
        placeholder="e-mail"
        placeholderTextColor="#000"
      />

      <Input
        value={password}
        onChangeText={(value) => setPassword(value)}
        placeholder="senha"
        placeholderTextColor="#000"
      />

      <Login>
        <LoginText>Login</LoginText>
      </Login>

      <Register onPress={() => navigation.navigate('SignUp')}>
        <RegisterText>Me cadastrar</RegisterText>
      </Register>
    </Container>
  );
};

export default SignIn;
