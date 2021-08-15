import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Dimensions, FlatList, TextInput } from 'react-native'

import ProductList from './ProductList';
import Header from '../../Components/Shared/Header'
import SearchedProduct from './SearchedProduct';
import { Ionicons, Entypo } from '@expo/vector-icons';
import Banner from '../../Components/Shared/Banner';
import CategoryFilter from './CategoryFilter';
//dummy data
const productData = require('../../../assets/products.json');
const productsCategory = require('../../../assets/094 categories.json');


//layout
const { width } = Dimensions.get('window')

const ProductContainer = (props) => {

    const [products, setProducts] = useState([])
    const [productFiltered, setProductFiltered] = useState([]);
    const [focus, setFocus] = useState()


    //category related state variable
    const [categories, setCategories] = useState([])
    const [productCatg, setProductCatg] = useState([])
    const [active, setActive] = useState()
    const [initalState, setInitialState] = useState([])


    //Mounting operation 
    useEffect(() => {
        setProducts(productData)
        setProductFiltered(productData)
        setFocus(false)
        setCategories(productsCategory)
        setActive(-1)
        setInitialState(productData)
        return () => {
            setProducts([])
            setProductFiltered([])
            setFocus()
            setCategories([])
            setActive()
            setInitialState([])
        }
    }, [])


    //search filter methods 
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

    // Category filter  methods 
    const changeCtg = (catg) => {
        {
            catg === 'all' ? [setProductCatg(initalState), setActive(true)]
                : [
                    setProductCatg(
                        productData.filter(i => i.category.$oid === catg)
                    ),
                    setActive(true)
                ]

        }
    }


    return (
        <View style={{ flex: 1, }} >
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
            {/* conditional rendering based on searchbar action*/}
            {focus == true ?
                <SearchedProduct productsFiltered={productFiltered} />
                :
                <View style={{ flex: 1 }}>

                    <View>
                        <Banner />
                    </View>
                    <CategoryFilter
                        categories={categories}
                        categoryFilter={(cat_Id) => changeCtg(cat_Id)}
                        productCatg={productCatg}
                        active={active}
                        setActive={setActive}
                    />
                    <FlatList
                        numColumns={2}
                        data={products}
                        renderItem={({ item }) => <ProductList
                            id={item._id}
                            item={item}
                            navigation={props.navigation}
                        />}
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
