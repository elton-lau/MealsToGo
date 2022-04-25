import styled from '@emotion/native';
import { Button, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export const AccountBackground = styled.ImageBackground`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;

AccountBackground.defaultProps = { source: require('../../assets/home_bg.jpeg') };

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AuthButton = ({ name, onPress }) => {
  return (
    <Button
      onPress={onPress}
      width="100px"
      leftIcon={<Ionicons name="lock-open-outline" type="Ionicons" color="white" size={16} />}>
      <Text color="white">{name}</Text>
    </Button>
  );
};
