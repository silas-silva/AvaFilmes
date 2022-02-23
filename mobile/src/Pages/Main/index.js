/* eslint-disable */

import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import API from '../../services/Api';
import Header from '../../Components/Header'
import List from '../List'
import Form from '../Form'


function Main() {

    const [visibleForm, setVisibleForm] = React.useState(false)
    const [visibleList, setVisibleList] = React.useState(true)
    const [movie, setMovie] = React.useState(false)

    const closeForm = () => {
        setVisibleList(true)
        setVisibleForm(false)
    }

    const openForm = (movie) => {
        setMovie(movie)
        setVisibleForm(true)
        setVisibleList(false)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />
            </View>
            <View style={styles.body}>
                {visibleList && <List openForm={openForm} />}
                {visibleForm && <Form movie={movie} closeForm={closeForm} />}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        height: 52,
    },
    body:{
        flex: 1,
    },
});

export default Main;