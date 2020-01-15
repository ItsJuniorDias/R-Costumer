import React from 'react';
import { View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

// import { Container } from './styles';

Geolocation.getCurrentPosition(info => console.log(info));

export default function Map() {
  return <View />;
}

Map.navigationOptions = {
  title: 'Localização Atual',
};
