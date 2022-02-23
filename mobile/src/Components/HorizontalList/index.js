/* eslint-disable */

import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import CardMovie from '../../Components/CardMovie';
import API from '../../services/Api';

function HorizontalList({page}) {
    const [datas, setDatas] = React.useState(false);

    let getDatas = async () => {
        let response;
        try {
            response = await API.get(`movies/page/${page}`);
        } catch (error) {
            response = false
        }
        setDatas(response.data.movies)
    }

    React.useEffect(() => {
        getDatas();
    }, [])

    let movieList = "Não tem Filmes Disponíveis, Recarregue o app"


    return (
        <View >
                < FlatList
                    showVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    horizontal
                    data={datas}            //Os dados que vai ser passado, pode ser com objeto ou array
                    renderItem={({item}) => <CardMovie keyExtractor movie={item} />}
                />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default HorizontalList;