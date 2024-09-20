import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

import styles from './estilo'


export default function TelaCatalogo() {
    return (
        <ScrollView style={styles.container}>
          <Text style={styles.header}>Nossos vinhos</Text>
          <Text style={styles.subHeader}>
            Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.
          </Text>
    
          <View style={styles.card}>
            <Image source={require('../../assets/vinho-branco.jpg')} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Chatigny Chardonnay</Text>
              <Text style={styles.description}>
                Vinho leve, refrescante e levemente cítrico da cor amarela pálida. Perfeito com carnes brancas e massas ao pesto.
              </Text>
            </View>
          </View>
    
          <View style={styles.card}>
            <Image source={require('../../assets/vinho-especial.jpg')} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Concha y Toro Exportacion</Text>
              <Text style={styles.description}>
                Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.
              </Text>
            </View>
          </View>
    
          <View style={styles.card}>
            <Image source={require('../../assets/vinho-rose.jpg')} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Portada Winemaker's</Text>
              <Text style={styles.description}>
                Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi. Perfeito com queijo parmesão e carnes assadas ou grelhadas.
              </Text>
            </View>
          </View>
    
          <View style={styles.card}>
            <Image source={require('../../assets/vinho-seco.jpg')} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Elvio Cogno Ravera Barolo</Text>
              <Text style={styles.description}>
                Vinho estruturado, com sabor de cereja vermelha madura, framboesas, notas de tabaco e taninos aveludados. Sua cor é vermelho-granada.
              </Text>
            </View>
          </View>
        </ScrollView>
      );
}
