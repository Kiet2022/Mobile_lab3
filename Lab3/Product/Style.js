
import {StyleSheet} from 'react-native';
import { black, white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';


export default styles = StyleSheet.create({
    container: {
        flex:1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor:"#DDD"
    },
    Title:{
        fontSize: 20
    },
    button:{
        padding:10,
        fontSize:15,
        backgroundColor:'#2EEDF7',
        borderRadius:5
    },

    BottomNavigator:{
        backgroundColor:'#E3F7F6',
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
        padding:10,
    },
    Headers:{
        fontSize:40        
    },
    buttonText:{
        textAlign: 'center',
        color:'white',
        fontSize:20
    },
    InputBox:{
        borderColor: 'black',
        borderRadius: 5
    }

});