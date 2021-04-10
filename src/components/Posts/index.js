import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Posts = (props) => {
    const post = props.post;
    return (
        <View style = {styles.container}>
            <Image 
            style={styles.image} 
            source = {{uri: post.image}}  ></Image> 

            <Text style = {styles.bedText}>{post.bed} bed, {post.bedroom} bedroom</Text>

            <Text style = {styles.description} numberOfLines = {2}> {post.type}. {post.title} </Text>
            <Text style={styles.prices}>
                <Text style = {styles.oldAmt}>{post.oldPrice} </Text>
                <Text style = {styles.newAmt}> {post.newPrice}</Text>
                / night
            </Text>
            <Text style = {styles.totalAmt}>{post.totalPrice} total</Text>
        </View>
    );

};

export default Posts;