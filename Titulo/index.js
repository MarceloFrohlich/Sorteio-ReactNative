import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function Titulo(){
    return(
        <View style={titulo.container}>
            <Text style={titulo.titulo}>Sorteio de Número aleatório</Text>
            <Text style={titulo.subtitulo}>Boa sorte!</Text>
        </View>
    );
}

const titulo = StyleSheet.create({
    container:{
        height: 60,
        backgroundColor: 'darkcyan'
    },
    titulo:{
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold',
        paddingLeft: 15,
    },
    subtitulo: {
        fontSize: 16,
        paddingLeft: 15
    }
})