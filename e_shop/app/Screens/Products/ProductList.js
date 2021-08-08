import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import ProductCard from './ProductCard';


const { width } = Dimensions.get('window');

const ProductList = (props) => {

    const { item, id } = props

    return (
        <TouchableOpacity
            style={{ width: '50%', }}
            onPress={() => { console.log('it is pressed') }}
        >
            <View style={{
                width: width / 2 - 10,
                backgroundColor: 'grainsboro'
            }} >
                <ProductCard  {...item} />
            </View>

        </TouchableOpacity>
    )
}

export default ProductList

const styles = StyleSheet.create({})
