import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, SafeAreaView, TextInput } from 'react-native'

const { width, height } = Dimensions.get('window');

const Header = () => {
    return (
        <View style={styles.header} >
            <Image
                source={require('../../../assets/logo.jpg')}
                resizeMode='contain'
                style={{ width: '100%', height: '100%' }}
            />

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: width,
        // flexDirection: 'row',
        alignContent: 'center',
        // justifyContent: 'center',
        paddingTop: 20,
        paddingHorizontal: 10,
        paddingBottom: 5,
        height: 60,
        // borderColor: 'black',
        // borderWidth: 1,
        elevation: 8
    }
})
