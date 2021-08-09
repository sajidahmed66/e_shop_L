import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

const Banner = (props) => {
    const [bannerdata, setBannerData] = useState([]);

    useEffect(() => {
        setBannerData([
            "https://images.vexels.com/media/users/3/126443/preview2/ff9af1e1edfa2c4a46c43b0c2040ce52-macbook-pro-touch-bar-banner.jpg",
            "https://www.yardproduct.com/blog/wp-content/uploads/2016/01/gardening-banner.jpg",
            "https://pbs.twimg.com/media/D7P_yLdX4AAvJWO.jpg",
        ])
    }, [])

    return (
        <ScrollView>

            <View style={styles.container} >
                <View style={styles.swiper} >
                    <Swiper
                        horizontal={true}
                        showsButtons={false}
                        autoplay={true}
                        autoplayTimeout={3}
                        style={{ height: width / 2 }}
                    >
                        {bannerdata.map(bannerItem => (
                            <Image
                                source={{ uri: bannerItem }}
                                resizeMode='contain'
                                key={Math.random()}
                                style={styles.imageView}
                            />
                        ))}
                    </Swiper>
                    <View stryle={{ height: 20 }} ></View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Banner

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gainsboro'
    },
    imageView: {
        height: width / 2,
        width: width - 40,
        borderRadius: 10,
        marginHorizontal: 10
    },
    swiper: {
        width: width,
        alignItems: 'center',
        marginTop: 10
    }
})
