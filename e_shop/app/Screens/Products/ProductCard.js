import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, Button } from 'react-native'
import { connect } from 'react-redux';

//cart actions import
import { addToCart, removeFromCart, clearCart } from '../../Redux/cartItems/cartItemActionCreators';

//dimensions
const { width } = Dimensions.get('window');

//mapStateTopProps:

const mapDispatchToProps = dispatch => {
    return {
        addToCart: productItem => dispatch(addToCart({ productItem, quantity: 1 })),
        // removeFromCart: productItem => dispatch(removeFromCart(productItem)),
        // clearCart: () => dispatch(clearCart())
    }
}

const ProductCard = (props) => {

    const { name, price, image, countInStock } = props;

    return (
        <View style={styles.container} >
            <Image style={styles.imageContainer}
                source={{
                    uri: image ?
                        image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                }}
                resizeMode='contain'
            />
            <View style={styles.card} />
            <Text style={styles.title} >
                {name.lenght > 15 ? name.substring(0, 12) + '...' : name}
            </Text>
            <Text style={styles.price} >${price} </Text>
            {countInStock > 0 ? (
                <View style={{ padding: 10 }}>
                    <Button
                        title='Add'
                        color='green'
                        onPress={() => props.addToCart(props)} />
                </View>
            ) : <Text style={{ marginTop: 20 }} >No stock is available</Text>}
        </View>
    )
}

export default connect(null, mapDispatchToProps)(ProductCard)

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white'
    },
    imageContainer: {
        width: width / 2 - 30,
        height: width / 2 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45,
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 110,
        backgroundColor: 'transparent',
        width: width / 2 - 30,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
    price: {
        fontSize: 20,
        color: 'orange',
        marginTop: 10
    }
})
