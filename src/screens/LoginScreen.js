import React, { useState, useContext } from 'react';
import { AuthenticationContext } from '../services/authentication/authentication.context';
import { AccountBackground, AccountCover, AuthButton } from '../components/AccountComponent';
import { VStack, Input, Center, View, Text, FormControl, Box, Flex } from 'native-base';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <View backgroundColor="rgba(255, 255, 255, 0.7)" p={4} mt={2} alignItems="center" width="75%">
        <VStack space={4} width="100%">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              onChangeText={(e) => setEmail(e)}
              value={email}
              size="md"
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </FormControl>
          <FormControl isInvalid={!!error}>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              onChangeText={(p) => setPassword(p)}
              value={password}
              size="md"
              type="password"
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
            />
            <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
          </FormControl>
          <Center>
            <AuthButton
              icon="lock-open-outline"
              onPress={() => onLogin(email, password)}
              name="login"
            />
          </Center>
        </VStack>
      </View>
    </AccountBackground>
  );
};

export default LoginScreen;
