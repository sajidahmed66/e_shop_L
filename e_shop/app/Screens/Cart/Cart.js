import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, Button, ScollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import LottieView from 'lottie-react-native';
//Redux imports (actions, and map function)
import { connect } from 'react-redux';
import { removeFromCart, clearCart } from '../../Redux/cartItems/cartItemActionCreators'


const mapStateToProps = (state) => {
    const { cartItemReducers } = state
    return {
        cartItem: cartItemReducers
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // addToCart: productItem => dispatch(addToCart({ productItem, quantity: 1 })),
        removeFromCart: productItem => dispatch(removeFromCart(productItem)),
        clearCart: () => dispatch(clearCart())
    }
}



const { width, height } = Dimensions.get('window');

const Cart = (props) => {
    // console.log(props)
    let total = 0;
    props.cartItem.forEach(item => {
        return (total += item.productItem.price)
    })
    const RenderCartItems = () => (
        props.cartItem.map(item => {
            return (
                <View style={{ alignItems: 'center' }} >
                    <View style={{ width: width, height: 75, paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center' }} >
                        <View style={{ width: '25%', height: '100%' }}  >
                            <Image
                                source={{ uri: item.productItem.image ? item.productItem.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png' }}
                                style={{ height: '100%', width: 75, padding: 10 }}
                                resizeMode='contain'
                            />
                        </View>
                        <View style={{ padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '75%', height: '100%', }}  >
                            <Text>
                                {item.productItem.name}
                            </Text>
                            <Text>{item.productItem.price}</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 1.5, borderBottomColor: 'gray', width: width - 35, alignSelf: 'center' }} />
                </View>
            )
        })
    )
    const EmptyCart = () => {
        return (
            <LottieView
                source={require('../../../assets/lottie_file/empty-cart.json')}
                autoPlay

            />
        )
    }


    return (
        <View style={{ flex: 1 }} >
            <Text>This is Cart Page</Text>
            {props.cartItem.length ? RenderCartItems() : EmptyCart()}
            {props.cartItem.length ? <View style={styles.bottomContainer}  >
                <View><Text>{total}</Text></View>
                <View style={{ flexDirection: 'row' }} >
                    <Button title='Checkout' />
                    <Button title='Clear Cart' />
                </View>
            </View> : null}
        </View>
    )
}


export default connect(mapStateToProps, null)(Cart);

const styles = StyleSheet.create({
    emptyContainer: {
        height: height * 0.875,
        width: width,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    bottomContainer: {
        width: width,
        height: 70,
        position: 'absolute',
        bottom: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        alignSelf: 'center',
        elevation: 20,

    }
})
