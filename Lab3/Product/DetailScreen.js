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
import { Card, Button } from 'react-native-paper';

  import styles from './Style';
  import {useEffect, useState} from 'react';

  export default DetailScreen =() =>{
    const[data, setData] = useState([]);
    const filePath = 'https://dummyjson.com/products/2';

    useEffect(()=>{
        fetch(filePath).then((response) =>{
            if(!response.ok) throw new Error('network is error');
            return response.json();
        }).then((d) => {setData(d)}).catch((error)=>{console.log(error)})
    })

    const MyComponent = () => (
      <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
        <Card.Content>
          <Text variant="titleLarge">{data.title}</Text>
          <Text variant="bodyMedium">Card content</Text>

          <Text variant="bodyMedium"><Text style={styles.TitleSmall}>Description:</Text> {data.description}</Text>
            <Text variant="bodyMedium"><Text style={styles.TitleSmall}>Price:</Text> {data.price}</Text>
            <Text variant="bodyMedium"><Text style={styles.TitleSmall}>Discount:</Text> {data.discountPercentage}</Text>
            <Text variant="bodyMedium" style={{color: 'green'}}>Rating: {data.rating}</Text>
            <Text variant="bodyMedium"><Text style={styles.TitleSmall}>Stock:</Text> {data.stock}</Text>
            <Text variant="bodyMedium"><Text style={styles.TitleSmall}>Brand:</Text> {data.brand}</Text>
            <Text variant="bodyMedium"><Text style={styles.TitleSmall}>Category:</Text> {data.category}</Text>
        </Card.Content>
        <Card.Cover source={{ uri: data.thumbnail }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    );

    return(
      <Card>
        <Card.Cover source={{ uri: data.thumbnail }} />
        <Card.Title title={data.title} />
        <Card.Content>
          <Text variant="bodyMedium"><Text style={styles.TitleSmall}>Description:</Text> {data.description}</Text>
            <Text variant="bodyMedium"><Text style={styles.TitleSmall}>Price:</Text> {data.price}</Text>
            <Text variant="bodyMedium"><Text style={styles.TitleSmall}>Discount:</Text> {data.discountPercentage}</Text>
            <Text variant="bodyMedium" style={{color: 'green'}}>Rating: {data.rating}</Text>
            <Text variant="bodyMedium"><Text style={styles.TitleSmall}>Stock:</Text> {data.stock}</Text>
            <Text variant="bodyMedium"><Text style={styles.TitleSmall}>Brand:</Text> {data.brand}</Text>
            <Text variant="bodyMedium"><Text style={styles.TitleSmall}>Category:</Text> {data.category}</Text>
        </Card.Content>
        
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    );
  }