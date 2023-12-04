import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity, SafeAreaView} from 'react-native';

import ProductScreen from './Product/Product';
import AddProduct from './Product/Add';
import Search from './Product/Search';
import DetailScreen from './Product/DetailScreen';
import SearchProduct from './Product/Search';

import App_Run from "./Product/Navigation";

import styles from './Product/Style';
const App=()=> {
  return (
    <App_Run/>
  );
}

export default App;
