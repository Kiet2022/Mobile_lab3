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



const ProductScreen = (data) => {  
    const Item = ({item}) => (
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
    //Alert.alert(data.length.toString());
    return (
      //<SafeAreaView style={{flex: 1, padding: 10}}>
      <View>
        <View>
          <Text style={styles.Headers}>PRODUCT LIST</Text>
        </View>
  
        <View style={{flex: 3, flexDirection: 'row'}}>
          <FlatList
            data={data}
            renderItem={({item}) => <Item item={item} title={item.title} />}
          />
        </View>
        </View>
//</SafeAreaView>
    );
  };
  


const SearchProduct = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    let filePath = 'https://dummyjson.com/products/';
    
        const Search =() =>{
            console.log('value: ' + value)

            if(value !=""){
                filePath = 'https://dummyjson.com/products/search?q=' + value;
                fetch(filePath).then((response) =>{
                    if(!response.ok) throw new Error('network is error');

                    return response.json();
                }).then((d) => {setData(d.products)}).catch((error)=>{console.log(error)}).finally(console.log(data))
            }
            
            if(data.length == 0){
                Alert.alert('cannot find');
            }
        }

        return(
            <SafeAreaView style={{flex: 1, padding: 10}}>
                <Text style={styles.Headers}>Add Product</Text>
                <View>
                    <TextInput style={styles.InputBox} placeholder='Enter the title' onChangeText={query => setValue(query)}/>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText} onPress={Search}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <ProductScreen data={data}/>
            </SafeAreaView>
        );
}


export default SearchProduct;