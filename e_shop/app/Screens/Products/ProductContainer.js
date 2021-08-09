import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Dimensions, FlatList, TextInput } from 'react-native'

import ProductList from './ProductList';
import Header from '../../Components/Shared/Header'
import SearchedProduct from './SearchedProduct';
import { Ionicons, Entypo } from '@expo/vector-icons';
import Banner from '../../Components/Shared/Banner';
//dummy data
const productData = require('../../../assets/products.json')

//layout
const { width } = Dimensions.get('window')

const ProductContainer = (props) => {

    const [products, setProducts] = useState([])
    const [productFiltered, setProductFiltered] = useState([]);
    const [focus, setFocus] = useState()
    useEffect(() => {
        setProducts(productData)
        setProductFiltered(productData)
        setFocus(false)
        return () => {
            setProducts([])
            setProductFiltered([])
            setFocus()
        }
    }, [])

    const searchedProductFiter = (text) => {
        setProductFiltered(
            products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }

    const openList = () => {
        setFocus(true)
    }

    const onBlur = () => {
        setFocus(false)

    }

    return (
        <View>
            <Header />

            {/* Search bar section */}
            <View style={styles.searchBAr} >
                <Ionicons name="search-circle-outline" size={40} color="green" style={{ paddingLeft: 5 }} />
                <TextInput style={{ height: '100%', width: "80%" }}
                    placeholder='search'
                    onFocus={openList}
                    onBlur={onBlur}
                    onChangeText={text => searchedProductFiter(text)}
                />
                <Entypo name="cross" size={24} color="black" onPress={onBlur} />
            </View>


            {/* conditional rendering based on searchbar action */}
            {focus == true ?
                <SearchedProduct productsFiltered={productFiltered} />
                :
                <View style={{ flex: 1, paddingBottom: 10, }} >

                    <View>
                        <Banner />
                    </View>
                    <FlatList
                        numColumns={2}
                        data={products}
                        renderItem={({ item }) => <ProductList id={item._id} item={item} />}
                        keyExtractor={item => item.name}

                    />
                </View>
            }

        </View>
    )
}

export default ProductContainer

const styles = StyleSheet.create({
    searchBAr: {
        width: width,
        height: 60,
        flexDirection: 'row',
        backgroundColor: 'gray',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})
