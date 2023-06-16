import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const TelaInicio = () => {

    const [numeroSorteado, setNumeroSorteado] = useState(1);
    const [flagInputFocus, setFlagInputFocus] = useState("");
    const [valorMinimo, setValorMinimo] = useState(0);
    const [valorMaximo, setValorMaximo] = useState(10)

    const validarCampos = (minimo, maximo) => {
        if (isNaN(minimo) || isNaN(maximo)){
            alert('Digite os valores');
            return false
        }
        if (minimo > maximo) {
            alert('O valor mínimo deve ser menor que o valor máximo')
            return false
        }
        return true
    }


    const gerarNumero = () => {
        const min = parseInt(valorMinimo);
        const max = parseInt(valorMaximo);

        if (!validarCampos(min, max)) {
            return;
        }

        const novoNumero = Math.floor(Math.random() * (max + 1 - min) + min);
        setNumeroSorteado(novoNumero);
    }

    return (
        < View style={Tela.container} >
            <Text style={Tela.titulo}>Escolha os valores mínimo e máximo para o sorteio:</Text>

            <View style={Tela.linhaInput}>
                <Text>Valor Mínimo:</Text>
                <TextInput 
                style={ flagInputFocus === 'txt_min' ? Tela.inputFocus : Tela.inputNormal}
                onFocus={ () => setFlagInputFocus('txt_min')} 
                onBlur={() => setFlagInputFocus('')}
                textAlign='center'
                keyboardType='number-pad'
                maxLength={4}
                autoFocus={true}
                value = {valorMinimo.toString()}
                onChangeText={valor => setValorMinimo(valor)}/>

            </View>
            <View style={Tela.linhaInput}>
                <Text>Valor Máximo:</Text>
                <TextInput 
                style={ flagInputFocus === 'txt_max' ? Tela.inputFocus : Tela.inputNormal}
                onFocus={ () => setFlagInputFocus('txt_max')} 
                onBlur={() => setFlagInputFocus('')}
                textAlign='center'
                keyboardType='number-pad'
                maxLength={4}
                value = {valorMaximo.toString()}
                onChangeText={setValorMaximo}
                />
            </View>



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
    },
    titulo: {
        fontSize: 18,
        marginBottom: 50,
        textAlign: 'center'
    },
    linhaInput: {
        flexDirection: 'row',   
        alignItems: 'center',
        marginBottom: 10,
    },
    inputNormal:{
        borderWidth: 1,
        borderColor: '#d5d5d5',
        borderRadius: 3,
        width: 100,
        paddingHorizontal: 5,
        marginLeft: 10
    },
    inputFocus: {
        borderWidth: 1,
        borderColor: '#1f4f66',
        borderRadius: 3,
        width: 100,
        paddingHorizontal: 5,
        marginLeft: 10
    }
})