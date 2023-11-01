import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Image,
    SafeAreaView,
    FlatList,
    Alert,
  } from 'react-native';
  import styles from './Style';
  import {useEffect, useState} from 'react';

  export default AddProduct=()=>{
    const [title, setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [price, setPrice] = useState('');
  };