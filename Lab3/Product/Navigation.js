import React,{useState} from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import ProductScreen from "./Product";
import AddProduct from "./Add";
import SearchProduct from "./Search";
import DetailScreen from "./DetailScreen";

export default App_Run = () =>{
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key : 'Product_List', title: 'Products',focusedIcon: 'folder'},
        {key : 'Add_Product', title: 'Add',focusedIcon: 'folder'},
        {key : 'Search_Product', title: 'Search',focusedIcon: 'find'},
        {key : 'Detail', title: 'Detail',focusedIcon: 'calendar'},
    ]);

    const renderScenes = BottomNavigation.SceneMap({
        Product_List: ProductScreen,
        Add_Product: AddProduct,
        Search_Product: SearchProduct,
        Detail: DetailScreen,
    })

    return(
        <SafeAreaProvider>
            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScenes}
            />
        </SafeAreaProvider>
    );
}