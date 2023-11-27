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
  import {Icon, Appbar} from 'react-native-paper';

function SearchProduct (){

const [data, setData] = useState([]);
const [value, setValue] = useState('');
let filePath = 'https://dummyjson.com/products/';

const searchProduct =() =>{
    if(value !=""){
        filePath = 'https://dummyjson.com/products/search?q=' + value;
        fetch(filePath).then((response) =>{
            if(!response.ok) throw new Error('network is error');

            return response.json();
        }).then((d) => {setData(d.products)}).catch((error)=>{console.log(error)})
    }
}

return(
    <View>

    </View>
);
}

export default SearchProduct;