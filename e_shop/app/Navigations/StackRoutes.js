import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//screens
import SingleProductPage from '../Screens/Products/SingleProductPage';
import ProductContainer from '../Screens/Products/ProductContainer';
const Stack = createNativeStackNavigator();

const ProductStack = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='E-shop Home'
                component={ProductContainer}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Products Details'
                component={SingleProductPage}
            />
        </Stack.Navigator>
    )
}

export default ProductStack