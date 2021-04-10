import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Button, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';


const HomeScreen = (props) => {
    return (
        <View>
               <Pressable style = {styles.searchButton} onPress = {() => console.log("Clicked")}  >
                <Fontisto name="search" size={25} color = {"#f15454"} />
                <Text style={styles.searchButtonText}>Search nearby places</Text>
                </Pressable>
            <ImageBackground 
            source = {require('../../../assets/images/wallpaper.jpg')} 
            style = {styles.image}  > 

            

            <Text style = {styles.title}>Go Near</Text>

            <Pressable style = {styles.button} onPress = {() => console.log("Clicked")}  >
                <Text style={styles.buttonText}>Explore nearby places</Text>
                </Pressable>


            </ImageBackground>


        </View>
    );
}



export default HomeScreen;