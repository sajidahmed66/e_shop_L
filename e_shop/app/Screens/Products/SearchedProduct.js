import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const SearchedProduct = props => {
    console.log("searched Products", props)
    const { productsFiltered } = props;
    // console.log(productsFiltered)
    return (
        <View style={{ flex: 1 }}>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item) => (
                    <TouchableOpacity
                    // onPress
                    >
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                ))) :
                <View><Text>no products fount</Text></View>
            }
        </View>
    )
}

export default SearchedProduct

const styles = StyleSheet.create({})
