/* eslint-disable */

import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import API from '../../services/Api';

function Form(props) {

    const [review, setReview] = React.useState(0)
    const [email, setEmail] = React.useState("")

    const movie = {
        id: props.movie.id,
        image: props.movie.image,
        title: props.movie.title,
        numReviews: props.movie.numReviews,
        noteReview: parseFloat(props.movie.noteReview).toFixed(1)  //To fixed limita as casas deciMore
    }

    async function saveReview() {
        let save = await API.post(`/rate/${movie.id}`, { email, review });
        props.closeForm()
        alert(save.data.info)
    }

    return (
        <View style={{ width: '100%', marginBottom: 0 }}>
            <ScrollView style={{ marginTop: 3, width: '100%' }}>

                <View style={styles.card}>
                    <Image style={styles.image} source={{ uri: movie.image }} />
                    <Text style={
                        { marginTop: 10, height: 50, color: '#9D4E4B', fontWeight: 'bold', textAlign: 'center', paddingHorizontal: 12 }
                    }>
                        {movie.title}
                    </Text>
                    <Text style={styles.inputTitle1}>Informe Seu Email</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <Text style={styles.inputTitle}>Informe Sua Avaliação</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setReview(text)}
                        keyboardType='numeric'
                        placeholder='Valores entre 0 e 5'
                    />

                    <TouchableOpacity style={styles.button} onPress={saveReview}>
                        <LinearGradient style={styles.buttonMore} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9D4E4B', '#210E0C']}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Salvar</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => props.closeForm()}>
                        <LinearGradient style={styles.buttonMore} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9D4E4B', '#210E0C']}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Cancelar</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 370,
        height: 530,
        backgroundColor: 'white',
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '35%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,

    },
    stars: {
        marginTop: 10,
        width: 150,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    imageStar: {
        width: 22,
        height: 20,
    },
    button: {
        width: 200,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25
    },

    buttonMore: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        color: 'black',
        width: '90%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#C0C5C1'
    },
    inputTitle: {
        color: '#C0C5C1',
        marginLeft: -190,
        marginBottom: -10
    },
    inputTitle1: {
        color: '#C0C5C1',
        marginLeft: -220,
        marginBottom: -10
    }
});

export default Form;