import { View, Button, Text, Icon, Spacer, VStack } from 'native-base';
import React from 'react';
import { AccountBackground, AccountCover, AuthButton } from '../components/AccountComponent';
import { Ionicons } from '@expo/vector-icons';

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <View backgroundColor="rgba(255, 255, 255, 0.7)" p={4} mt={2} alignItems="center">
        <VStack space={4}>
          <AuthButton name="LOGIN" onPress={() => navigation.navigate('Login')} />
          <AuthButton name="REGISTER" onPress={() => navigation.navigate('Register')} />
        </VStack>
      </View>
    </AccountBackground>
  );
};

export default AccountScreen;
