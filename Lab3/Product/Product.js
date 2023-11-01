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

import {useEffect, useState} from 'react';

export default ProductScreen = () => {
  const Item = ({item}) => (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <Image source={{uri:item.thumbnail}} style={{width: 120, height: 120}}/>
      </View>

      <View style={{flex: 2}}>
        <Text>Description: {item.description}</Text>
        <Text>Price: {item.price}</Text>
        <Text>Discount: {item.discountPercentage}</Text>
        <Text style={{color:'green'}}>Rating: {item.rating}</Text>
        <Text>Stock: {item.stock}</Text>
        <Text>Brand: {item.brand}</Text>

        <Text>Category: {item.category}</Text>
      </View>
    </View>
  );

  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products';

  useEffect(() => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(d => {
        setData(d.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
 //Alert.alert(data.length.toString());
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'row'}}>
      <FlatList
        data={data}
        renderItem={
          ({item}) => <Item item={item} title={item.title} />
          //<Text>{item.title}</Text>
        }
      />
    </SafeAreaView>
  );
};
