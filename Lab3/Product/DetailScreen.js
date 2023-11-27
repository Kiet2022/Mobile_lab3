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

  export default DetailScreen =() =>{
    const[data, setData] = useState([]);
    const filePath = 'https://dummyjson.com/products/2';

    useEffect(()=>{
        fetch(filePath).then((response) =>{
            if(!response.ok) throw new Error('network is error');

            return response.json();
        }).then((d) => {setData(d.products)}).catch((error)=>{console.log(error)})
    })

    return(
        <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 10}}>
        <View style={{flex: 1}}>
          <Image
            source={{uri: item.thumbnail}}
            style={{width: 120, height: 120}}
          />
        </View>
  
        <View style={{flex: 2}}>
          <Text>Description: {item.description}</Text>
          <Text>Price: {item.price}</Text>
          <Text>Discount: {item.discountPercentage}</Text>
          <Text style={{color: 'green'}}>Rating: {item.rating}</Text>
          <Text>Stock: {item.stock}</Text>
          <Text>Brand: {item.brand}</Text>
          <Text>Category: {item.category}</Text>
  
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }