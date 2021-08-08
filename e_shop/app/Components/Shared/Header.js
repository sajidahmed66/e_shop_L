import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, SafeAreaView } from 'react-native'

const Header = () => {
    return (
        <SafeAreaView style={styles.header} >
            <Image
                source={require('../../../assets/logo.jpg')}
                resizeMode='contain'
                style={{ width: '100%', height: '100%' }}
            />
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: 80,
        height: 80,
    }
})
