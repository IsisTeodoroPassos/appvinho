import React from 'react';
import { View, Text, ScrollView, estilosheet, Image } from 'react-native';

import estilos from './estilo'


export default function TelaCatalogo() {
    return (
        <ScrollView style={estilos.container}>
          <Text style={estilos.header}>Nossos vinhos</Text>
          <Text style={estilos.subHeader}>
            Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.
          </Text>
    
          <View style={estilos.card}>
            <Image source={require('../../assets/vinho-branco.jpg')} style={estilos.image} />
            <View style={estilos.textContainer}>
              <Text style={estilos.title}>Chatigny Chardonnay</Text>
              <Text style={estilos.description}>
                Vinho leve, refrescante e levemente cítrico da cor amarela pálida. Perfeito com carnes brancas e massas ao pesto.
              </Text>
            </View>
          </View>
    
          <View style={estilos.card}>
            <Image source={require('../../assets/vinho-especial.jpg')} style={estilos.image} />
            <View style={estilos.textContainer}>
              <Text style={estilos.title}>Concha y Toro Exportacion</Text>
              <Text style={estilos.description}>
                Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.
              </Text>
            </View>
          </View>
    
          <View style={estilos.card}>
            <Image source={require('../../assets/vinho-rose.jpg')} style={estilos.image} />
            <View style={estilos.textContainer}>
              <Text style={estilos.title}>Portada Winemaker's</Text>
              <Text style={estilos.description}>
                Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi. Perfeito com queijo parmesão e carnes assadas ou grelhadas.
              </Text>
            </View>
          </View>
    
          <View style={estilos.card}>
            <Image source={require('../../assets/vinho-seco.jpg')} style={estilos.image} />
            <View style={estilos.textContainer}>
              <Text style={estilos.title}>Elvio Cogno Ravera Barolo</Text>
              <Text style={estilos.description}>
                Vinho estruturado, com sabor de cereja vermelha madura, framboesas, notas de tabaco e taninos aveludados. Sua cor é vermelho-granada.
              </Text>
            </View>
          </View>
        </ScrollView>
      );
}
