import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button, Dimensions } from 'react-native'


const { width, height } = Dimensions.get('window')

const SingleProductPage = (props) => {
    const productDetails = props.route.params.item
    console.log(productDetails)
    const [item, setItem] = useState(productDetails)
    const [availability, setAvailability] = useState()

    return (
        <ScrollView
            style={{ flex: 1, paddingHorizontal: 20 }}
            bounces={true}
            contentContainerStyle={{ paddingVertical: 50 }}
        >
            <View>

                <View>
                    <Image
                        source={{
                            uri: item.image ?
                                item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                        }}
                        resizeMode='contain'
                        style={styles.imageView}
                    />
                </View>
                <View style={styles.contentContainer} >
                    <Text style={styles.contentHeader}  >{item.name}</Text>
                    <Text style={styles.contentText}>{item.brand}</Text>
                    <Button title='add' onPress={() => console.log('added to cart')} />
                </View>
                {/* todo discirption, reachdiscription, availability */}
                {/* <View >
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate laborum ratione blanditiis architecto aperiam officiis, harum voluptas iusto porro! Doloremque porro ducimus in quaerat ipsa! Amet minima culpa architecto ex?</Text>
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate laborum ratione blanditiis architecto aperiam officiis, harum voluptas iusto porro! Doloremque porro ducimus in quaerat ipsa! Amet minima culpa architecto ex?</Text>
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate laborum ratione blanditiis architecto aperiam officiis, harum voluptas iusto porro! Doloremque porro ducimus in quaerat ipsa! Amet minima culpa architecto ex?</Text>
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate laborum ratione blanditiis architecto aperiam officiis, harum voluptas iusto porro! Doloremque porro ducimus in quaerat ipsa! Amet minima culpa architecto ex?</Text>
                </View> */}
            </View>
            {/* <View style={styles.bottomContainer} ></View> */}
        </ScrollView>
    )
}

export default SingleProductPage

const styles = StyleSheet.create({
    container: {

    },
    imageView: {
        width: width - 20,
        height: 250
    },
    contentContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    contentText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 30
    },
    contentHeader: {
        fontWeight: 'bold',
        marginBottom: 20,
        fontSize: 24
    },
    bottomContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'black',
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        width: width
    },
    price: {
        fontSize: 24,
        margin: 20,
        color: 'red'
    }
})
