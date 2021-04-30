import React,{useState,useEffect} from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import colors from '../config/colors.js';

const ElevatorStatuses=(props) => {
    
    const { id } = props.route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);


    // function checkStatus() {
    useEffect(()=>{
        fetch(`https://rocket-rest-api.herokuapp.com/api/Elevators/${id}`)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));                      
    }, [data]);
    
    useEffect(() => {
        return () => {
          console.log("cleans useEffect");
        };
    }, []);


    function updateStatus() {
        fetch(`https://rocket-rest-api.herokuapp.com/api/Elevators/${id}`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': ' application/json', // <-- Specifying the Content-Type
            }),
            body: JSON.stringify({
                status: 'Active'
            })
            // <-- Post parameters
        })
        .then((response) => response.text())
        .then((responseText) => {
            alert(responseText)
        })
        .catch((error) => {
            console.error(error);
        });
    };
    
    
    
    return (
        <View>
            <TouchableOpacity>

                {isLoading ? <ActivityIndicator/> : (
                    <Text  
                        style={[
                        styles.status,
                        data.status == "Inactive" ?
                        { backgroundColor: 'red' } 
                        : { backgroundColor: 'green' }
                    ]}>
                        {data.status}
                    </Text>
                )}

                <Button style={styles.buttonText}
                    icon="switch" mode="outlined" onPress={() => updateStatus()} title='End Task'>
                </Button>  



              
            </TouchableOpacity>
            {/* </ImageBackground> */}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    instructions: {
      color: '#888',
      fontSize: 18,
      margin: 15,
  
    }, 
    status: {
      padding: 20,
      borderRadius: 5,
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 20,
    },
    textinput: {
      fontSize:30, height: 40,
      margin: 10
    },
    elevatorId: {
      backgroundColor: "red",
      padding: 20,
      borderRadius: 5,
      textAlign: "center"
    },
    elevatorIdText: {
      fontSize: 20,
      color: '#fff',
  
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      }
  });

export default ElevatorStatuses;