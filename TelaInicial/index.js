import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const TelaInicio = () => {

    const [numeroSorteado, setNumeroSorteado] = useState(1)

    const gerarNumero = () => {
        const novoNumero = Math.floor(Math.random() * (101 - 1) + 1);
        setNumeroSorteado(novoNumero);
    }

    return (
        < View style={Tela.container} >
            <Text>Toque no Botão e veja quem é o vencedor de 1 a 100</Text>
            <View style={Tela.boxnumero}>
                <Text style={Tela.numero}>{numeroSorteado}</Text>
            </View>

            <View style={Tela.botao}>
                <Button title="Sortear" onPress={gerarNumero} color='#1f4f66' />
            </View>

        </View >

    )
}

export default TelaInicio

const Tela = StyleSheet.create({
    container: {
        marginTop: 50,
        display: 'flex',
        alignItems: 'center'
    },
    boxnumero: {
        marginTop: 75,
        height: 150,
        width: 150,
        backgroundColor: 'darkcyan',
        borderRadius: 80,
        justifyContent: 'center'
    },
    numero: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 72,
    },
    botao: {
        marginTop: 50,
        width: 150,
    }
})