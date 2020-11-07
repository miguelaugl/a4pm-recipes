import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import logoImg from '../../assets/full-logo.png';
import signUpBackground from '../../assets/sign-up-background.jpg';
import api from '../../services/api';

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

  async function handleRegisterClick() {
    if (password !== confirmPassword) {
      return;
    }

    const user = {
      name,
      email,
      password,
    };

    console.log(await api.get('/users'));

    await api.post('/users', user);
  }

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
        autoCompleteType="email"
      />

      <Input
        value={password}
        onChangeText={(value) => setPassword(value)}
        placeholder="senha"
        placeholderTextColor="#000"
        secureTextEntry={true}
      />

      <Input
        value={confirmPassword}
        onChangeText={(value) => setConfirmPassword(value)}
        placeholder="repetir senha"
        placeholderTextColor="#000"
        secureTextEntry={true}
      />

      <Login onPress={handleRegisterClick}>
        <LoginText>Cadastrar</LoginText>
      </Login>

      <Register onPress={() => navigation.navigate('SignIn')}>
        <RegisterText>Já sou cadastrado</RegisterText>
      </Register>
    </Container>
  );
};

export default SignUp;
