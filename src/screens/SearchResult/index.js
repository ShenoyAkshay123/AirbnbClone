import React from 'react';
import {View, Text, FlatList } from 'react-native';
import feed from '../../../assets/data/feed';
import Posts from '../../components/Posts'

const SearchResult = (props) => {

    return (
        <View>
            <FlatList data = {feed} renderItem = {({item}) => <Posts post = {item}></Posts>}  />
        </View>

    );
}

export default SearchResult;