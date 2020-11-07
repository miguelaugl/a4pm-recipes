import { useNavigation } from '@react-navigation/native';
import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { Alert } from 'react-native';

import logoImg from '../../assets/full-logo.png';
import signInBackground from '../../assets/sign-in-background.jpg';
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

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function handleLoginClick() {
    const response: AxiosResponse<User[]> = await api.get('/users');

    const isUserRegistered = response.data.some(
      (user) => user.email === email && user.password === password,
    );

    if (!isUserRegistered) {
      Alert.alert('Falha ao logar', 'Combinação de credenciais incorreta!');

      return;
    }

    navigation.navigate('Home');
  }

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

      <Login onPress={handleLoginClick}>
        <LoginText>Login</LoginText>
      </Login>

      <Register onPress={() => navigation.navigate('SignUp')}>
        <RegisterText>Me cadastrar</RegisterText>
      </Register>
    </Container>
  );
};

export default SignIn;
