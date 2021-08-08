import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Dimensions, FlatList } from 'react-native'
import ProductList from './ProductList';

const productData = require('../../../assets/products.json')

const ProductContainer = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(productData)

        return () => {
            setProducts([])
        }
    }, [])
    return (
        <View>

            <View style={{ flex: 1, paddingBottom: 10, }}  >
                <FlatList
                    numColumns={2}
                    data={products}
                    renderItem={({ item }) => <ProductList id={item._id} item={item} />}
                    keyExtractor={item => item.name}

                />
            </View>
        </View>
    )
}

export default ProductContainer

const styles = StyleSheet.create({})
