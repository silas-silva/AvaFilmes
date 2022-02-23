/* eslint-disable */

import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import API from '../../services/Api';
import HorizontalList from '../../Components/HorizontalList'

function List() {
    const [numPages, setNumPages] = React.useState(1);

    let getPages = async () => {
        let response;
        try {
            response = await API.get(`movies/page/1`);
            setNumPages(response.data.numPages)
        } catch (error) {
            response = false
        }
    }

    React.useEffect(() => {
        getPages();
    }, [])

    let numPagesArray = []

    for (let i = 0; i < numPages; i++) {
        numPagesArray.push(i+1)
    }


    return (
        <View style={styles.container}>
             < FlatList
                    showVerticalScrollIndicator={false}
                    data={numPagesArray}            
                    keyExtractor={(item) => item}
                    renderItem={({item}) => <HorizontalList keyExtractor page={item} />}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
});

export default List;