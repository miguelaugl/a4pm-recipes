import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';

const { Navigator, Screen } = createStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Navigator headerMode="none" initialRouteName="SignIn">
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default StackNavigator;
