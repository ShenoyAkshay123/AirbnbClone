import React, {useState} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import styles from './styles';
import search from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons';
const DestinationSearch = (props) => {

    const [inputText, setInputText] = useState('');

    return (
<View>
    <TextInput
        style = {styles.textInput}
        placeholder = "Where are you going?"
        value = {inputText}
        onChangeText = {setInputText}
    />

    <FlatList
        data = {search}
        renderItem = {(item) => {
            <View style = {styles.row}>
                <View style = {styles.iconContainer}> 
                    <Entypo name = {"location-pin"} size = {25}></Entypo>
                </View>
                <Text style = {styles.locationText}>{item.description}</Text>
            </View>
        }}
    />
</View>

    );
}

export default DestinationSearch;