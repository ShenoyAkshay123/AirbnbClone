import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Posts = (props) => {
    return (
        <View style = {styles.container}>
            <Image 
            style={styles.image} 
            source = {{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}}  ></Image> 

            <Text style = {styles.bedText}>1 bed, 1 bedroom</Text>

            <Text style = {styles.description} numberOfLines = {2}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
            <Text style={styles.prices}>
                <Text style = {styles.oldAmt}>$43 </Text>
                <Text style = {styles.newAmt}> $36</Text>
                / night
            </Text>
            <Text style = {styles.totalAmt}>$240 total</Text>
        </View>
    );

};

export default Posts;