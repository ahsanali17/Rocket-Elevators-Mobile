import React from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import logo from './app/assets/R2.png';
function SignIn(props) {
    const logo = require('../app/assets/R2.png');


    return (
       <ImageBackground 
            style={styles.background}
            // source={require("./splash.png")} //background
        >
       <Image source={logo} /> //Logo
        <View style={styles.loginButton}></View>

        </ImageBackground>

    );
}

export default SignIn;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65'
    }
})