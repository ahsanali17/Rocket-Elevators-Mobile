import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, TextInput, Button } from 'react-native';
import colors from '../config/colors.js';

function LogIn(props) {
   
    return (
       <ImageBackground 
            style={styles.background}
            //background
            source={require("../assets/images/screen-page-1.jpeg")} 
        >
            <View style={styles.Seperator}>   
                <View style={styles.LogInContainer} >
               
                    <TextInput
                        placeholder='Enter your email'
                    />    
    
                </View>
               

                <Button style={styles.LogInButton} title="Sign-In" />
            </View>

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/images/R2.png")} /> 
            </View>

        </ImageBackground>
        
    );
}

export default LogIn;

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
        top: '80%',
        alignItems: 'center'
    },
    Seperator: {
        display: 'flex',
        flexDirection:'column-reverse',
        justifyContent:'space-between'
    },
    LogInContainer: {
        flex: 0.4,
        width: 250,
        top: '99%',
        backgroundColor: 'rgba(52, 52, 52, 0.49)',
        justifyContent: 'center',
        alignItems: 'center',

    },
    LogInButton: {
        justifyContent: 'flex-start',
        alignItems:'center',
        top: '80%'
    }

})