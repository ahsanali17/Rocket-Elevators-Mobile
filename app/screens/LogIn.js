import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import colors from '../config/colors.js';

function WelcomeScreen(props) {
   
    return (
       <ImageBackground 
            style={styles.background}
            //background
            source={require("../assets/images/screen-page-1.jpeg")} 
        >
   

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/images/R2.png")} /> 
            </View>

        </ImageBackground>

    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logo: {
        width: 300,
        height: 100

    },
    logoContainer: {
        position: 'absolute',
        top: '40%',
        alignItems: 'center'
    }
})