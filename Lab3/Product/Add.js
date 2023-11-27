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
import { Button } from 'react-native-paper';

export default AddProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState('');

  handleDubmit = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        discountPercentage: discountPercentage,
        rating: rating,
        stock: stock,
        brand: brand,
        category: category,
        images: images,
      }),
    })
      .then(res => res.json())
      .then(console.log);
    Alert.alert('Add sucessfull');
  };


  return (
    <SafeAreaView style={{flex: 1, padding: 10}}>
      <Text style={styles.Headers}>Add Product</Text>
      <View>
        <Text>Title</Text>
        <TextInput style={styles.InputBox}/>
      </View>

      <View>
        <Text>Description</Text>
        <TextInput style={styles.InputBox}/>
      </View>

      <View>
        <Text>Price</Text>
        <TextInput style={styles.InputBox}/>
      </View>

      <View>
        <Text>Discount</Text>
        <TextInput style={styles.InputBox}/>
      </View>

      <View>
        <Text>Rating</Text>
        <TextInput style={styles.InputBox}/>
      </View>

      <View>
        <Text>Stock</Text>
        <TextInput style={styles.InputBox}/>
      </View>

      <View>
        <Text>Brand</Text>
        <TextInput style={styles.InputBox}/>
      </View>

      <View>
        <Text>Category</Text>
        <TextInput style={styles.InputBox}/>
      </View>

      <View>
        <Text>Images</Text>
        <TextInput style={styles.InputBox}/>
      </View>
      <View>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
