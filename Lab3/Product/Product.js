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

export default ProductScreen = () => {
  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products';

  useEffect(() => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error();
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

  const Item = ({item}) => (
    <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 10}}>
      <View style={{flex: 1}}>
        <Image
          source={{uri: item.thumbnail}}
          style={{width: 120, height: 120}}
        />
      </View>
      <View style={{flex: 2}}>
        <Text style={{fontWeights: 'bold'}}>Description: {item.description}</Text>
        <Text>Price: {item.price}</Text>
        <Text>Discount: {item.discountPercentage}</Text>
        <Text style={{color: 'green'}}>Rating: {item.rating}</Text>
        <Text>Stock: {item.stock}</Text>
        <Text>Brand: {item.brand}</Text>
        <Text>Category: {item.category}</Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Detail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );


  return (
    <SafeAreaView style={{flex: 1, padding: 10}}>
      <View>
        <Text style={styles.Headers}>PRODUCT LIST</Text>
      </View>

      <View style={{flex: 3, flexDirection: 'row'}}>
        <FlatList
          data={data}
          renderItem={({item}) => <Item item={item} title={item.title} />}
        />
      </View>

    </SafeAreaView>
  );
};
