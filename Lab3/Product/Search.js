import {
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Image,
    SafeAreaView,
    FlatList,
    Alert,
    Text
  } from 'react-native';
  import styles from './Style';
  import {useEffect, useState} from 'react';


const SearchProduct = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    let filePath = 'https://dummyjson.com/products/search?q=';
    
        const Search =() =>{
            console.log('value: ' + value);
            if(value !==""){
                filePath +=  value;

                console.log('file path: ' + filePath);
                fetch(filePath).then((response) =>{
                    if(!response.ok) throw new Error('network is error');
                    return response.json();
                }).then((d) => {
                  setData(d.products)
                  console.log('data: ' +data);
                }).catch((error)=>{
                  console.log('errors: ' +error)
                });
            }
            console.log('check: ' + data)
        }


        const Item = ({item}) => (
          <View style={styles.Card}>
            <View style={{flex: 1}}>
              <Image
                source={{uri: item.thumbnail}}
                style={{ height: 160}}
              />
            </View>
        
              <View style={{flex: 1}}>
                <Text><Text style={styles.TitleSmall}>Description:</Text> {item.description}</Text>
                <Text><Text style={styles.TitleSmall}>Price:</Text> {item.price}</Text>
                <Text><Text style={styles.TitleSmall}>Discount:</Text> {item.discountPercentage}</Text>
                <Text style={{color: 'green'}}>Rating: {item.rating}</Text>
                <Text><Text style={styles.TitleSmall}>Stock:</Text> {item.stock}</Text>
                <Text><Text style={styles.TitleSmall}>Brand:</Text> {item.brand}</Text>
                <Text><Text style={styles.TitleSmall}>Category:</Text> {item.category}</Text>
              </View> 
          </View>
        ); 
 

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

                  <View>
                    <Text style={styles.Headers}>PRODUCT LIST {data.length}</Text>
                  </View>
            
                  <View style={{flex: 3, flexDirection: 'row'}}>
                    <FlatList
                      data={data}
                      renderItem={({item}) => <Item item={item} />}
                    />
                  </View>
                
               
            </SafeAreaView>
        );
}


export default SearchProduct;