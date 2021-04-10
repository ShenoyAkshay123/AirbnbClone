/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Node} from 'react';
import {
  SafeAreaView,

} from 'react-native';

import HomeScreen from './src/screens/Home';
import Posts from './src/components/Posts';

import feed from './assets/data/feed';

const post = feed[0];



const App: () => Node = () => {

  return (
    <SafeAreaView>
      <Posts post = {post} >

      </Posts>

    </SafeAreaView>
  );
};

export default App;
