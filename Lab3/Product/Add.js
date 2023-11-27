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
        <Text style={styles.Title}>Title</Text>
        <TextInput style={styles.InputBox} placeholder='Enter the title'/>
      </View>

      <View>
        <Text style={styles.Title}>Description</Text>
        <TextInput style={styles.InputBox} placeholder='Description'/>
      </View>

      <View>
        <Text style={styles.Title}>Price</Text>
        <TextInput style={styles.InputBox} placeholder='Input Price'/>
      </View>

      <View>
        <Text style={styles.Title}>Discount</Text>
        <TextInput style={styles.InputBox} placeholder='Discount'/>
      </View>

      <View>
        <Text style={styles.Title}>Rating</Text>
        <TextInput style={styles.InputBox} placeholder='Rating'/>
      </View>

      <View>
        <Text style={styles.Title}>Stock</Text>
        <TextInput style={styles.InputBox} placeholder='Stock'/>
      </View>

      <View>
        <Text style={styles.Title}>Brand</Text>
        <TextInput style={styles.InputBox} placeholder='Brand'/>
      </View>

      <View>
        <Text style={styles.Title}>Category</Text>
        <TextInput style={styles.InputBox} placeholder='Category'/>
      </View>

      <View>
        <Text style={styles.Title}>Images</Text>
        <TextInput style={styles.InputBox} placeholder='Input img url'/>
      </View>
      <View>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
