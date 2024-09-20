import React from 'react';
import { View, Text, estilosheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import estilos from './estilo';

export default function TelaContato() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.header}>Entre em contato conosco para comprar nossos produtos</Text>

      <View style={estilos.card}>
        <Icon name="phone" size={40} color="#800000" />
        <Text style={estilos.label}>Telefone:</Text>
        <Text style={estilos.info}>+55 21 030000000</Text>
      </View>

      <View style={estilos.card}>
        <Icon name="map-marker" size={40} color="#800000" />
        <Text style={estilos.label}>Endereço:</Text>
        <Text style={estilos.info}>Av. 123, 222 - Rio de Janeiro, RJ</Text>
      </View>

      <View style={estilos.card}>
        <Icon name="envelope" size={40} color="#800000" />
        <Text style={estilos.label}>Email:</Text>
        <Text style={estilos.info}>preferida@adega.com.br</Text>
      </View>

      <View style={estilos.card}>
        <Icon name="instagram" size={40} color="#800000" />
        <Text style={estilos.label}>Instagram:</Text>
        <Text style={estilos.info}>@adegapreferida</Text>
      </View>
    </View>
  );
}

1