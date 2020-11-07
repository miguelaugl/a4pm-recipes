import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import logoImg from '../../assets/full-logo.png';
import signUpBackground from '../../assets/sign-up-background.jpg';

import {
  Container,
  Logo,
  Input,
  Login,
  LoginText,
  Register,
  RegisterText,
} from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <Container source={signUpBackground} blurRadius={2}>
      <Logo source={logoImg} />

      <Input
        value={name}
        onChangeText={(value) => setName(value)}
        placeholder="nome"
        placeholderTextColor="#000"
      />

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

      <Input
        value={confirmPassword}
        onChangeText={(value) => setConfirmPassword(value)}
        placeholder="repetir senha"
        placeholderTextColor="#000"
      />

      <Login>
        <LoginText>Cadastrar</LoginText>
      </Login>

      <Register onPress={() => navigation.navigate('SignIn')}>
        <RegisterText>Já sou cadastrado</RegisterText>
      </Register>
    </Container>
  );
};

export default SignUp;
