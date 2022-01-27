import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #011627;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-weight: bold;
  color: #f1a208;
`;

export const WrapperQuote = styled.View`
  width: 85%;
  justify-content: space-between;
  border-radius: ${RFValue(15)}px;
  background-color: #011a2f;
  margin-vertical: ${RFValue(40)}px;
`;

export const QuoteText = styled.Text`
  font-size: ${RFValue(17)}px;
  color: #fefcfb;
  padding: ${RFValue(25)}px;
  padding-bottom: ${RFValue(10)}px;
`;

export const Author = styled.Text`
  font-size: ${RFValue(12)}px;
  color: #cacbd5;
  align-self: flex-end;
  margin-right: ${RFValue(25)}px;
  margin-bottom: ${RFValue(15)}px;
`;

export const Button = styled.TouchableOpacity`
  width: ${RFValue(250)}px;
  height: ${RFValue(50)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(8)}px;
  background-color: #f1a208;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(19)}px;
  font-weight: bold;
  color: #011627;
`;
