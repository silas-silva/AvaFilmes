/* eslint-disable */
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import starFull from '../../assets/img/starFull.png';
import starHalf from '../../assets/img/starHalf.png';
import starEmpty from '../../assets/img/starEmpty.png';
import LinearGradient from 'react-native-linear-gradient';


// Function for put stars in array
function putStars(reviews, arrayStars) {
    if (reviews === 1 || reviews > 1) {
        arrayStars.push(<Image style={styles.imageStar} source={starFull} />);
    } else if (reviews > 0 && reviews < 1) {
        arrayStars.push(<Image style={styles.imageStar} source={starHalf} />)
    } else if (reviews === 0 || reviews < 0) {
        arrayStars.push(<Image style={styles.imageStar} source={starEmpty} />)
    }
    return arrayStars
}

function CardMovie(props) {

    const movie = {
        id: props.movie.id,
        image: props.movie.image,
        title: props.movie.title,
        numReviews: props.movie.numReviews,
        noteReview: parseFloat(props.movie.noteReview).toFixed(2)  //To fixed limita as casas decimais
    }
    let reviews = movie.noteReview;
    let arrayStars = [];

    if (reviews == 0) {
        for (let i = 0; i < 5; i++) {
            arrayStars.push(<Image style={styles.imageStar} source={starEmpty} />)
        }
    } else {
        for (let i = 0; i < 5; i++) {
            // att and put stars in array
            arrayStars = putStars(reviews, arrayStars);
            reviews = reviews - 1;
        }
    }


    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{ uri: movie.image }} />
            <Text style={styles.title}> {movie.title} </Text>
            <Text style={{ color: '#FFBB3A' }}>{movie.noteReview}</Text>

            <View style={styles.stars}>
                {arrayStars[0]}
                {arrayStars[1]}
                {arrayStars[2]}
                {arrayStars[3]}
                {arrayStars[4]}
            </View>

            <Text style={{ marginTop: 10, color: '#9D4E4B', fontWeight: 'bold' }}>{movie.numReviews}</Text>
            
            <TouchableOpacity onPress={() => props.openForm(movie)}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#9D4E4B', '#210E0C']} style={styles.button}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Avaliar</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 330,
        height: 450,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 15,
        marginBottom: 20,
        borderRadius: 8,
    },
    image: {
        marginTop: -48,
        width: '100%',
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    title: {
        marginTop: 10,
        height: 50,
        color: '#9D4E4B',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    stars: {
        marginTop: 15,
        width: 150,
        flexDirection: "row",
        justifyContent: 'space-between',
    },

    imageStar: {
        width: 22,
        height: 20,
    },

    button: {
        width: 200,
        height: 35,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },
});

export default CardMovie;