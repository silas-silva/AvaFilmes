/* eslint-disable */
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import GithubIcon from '../../assets/img/github.png';

function Header() {
    return (
        <View style={styles.styleHeader}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#9D4E4B', '#210E0C']}>
                <View style={styles.containerCenter}>
                    <View style={styles.icons}>
                        <Text style={styles.headerTitle}>AvaFilmes</Text>
                        <View style={styles.git}>
                            <Image style={styles.image} source={GithubIcon} />
                            <Text style={{color: 'white'}}>/Silas-Silva</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    styleHeader: {
        flex: 1,
    },
    containerCenter: {
        alignItems: 'center'
    },
    icons: {
        width: '80%',
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    git: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: 100,
    },
    image: {
        width: 20,
        height: 20
    },
});

export default Header;