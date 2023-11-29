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
        }).then((d) => {setData(d)}).catch((error)=>{console.log(error)})
    })


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
      <View style={styles.Card}>
        <View style={{flex: 1}}>
          <Image
            source={{uri: data.thumbnail}}
            style={{ height: '50%'}}
          />
        </View>
  
        <View style={{ justifyContent: 'flex-start'}} >
            <Text><Text style={styles.TitleSmall}>Description:</Text> {data.description}</Text>
            <Text><Text style={styles.TitleSmall}>Price:</Text> {data.price}</Text>
            <Text><Text style={styles.TitleSmall}>Discount:</Text> {data.discountPercentage}</Text>
            <Text style={{color: 'green'}}>Rating: {data.rating}</Text>
            <Text><Text style={styles.TitleSmall}>Stock:</Text> {data.stock}</Text>
            <Text><Text style={styles.TitleSmall}>Brand:</Text> {data.brand}</Text>
            <Text><Text style={styles.TitleSmall}>Category:</Text> {data.category}</Text>
  
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
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