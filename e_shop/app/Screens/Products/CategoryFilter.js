import React from 'react'
import { StyleSheet, View, TouchableOpacity, Dimensions, ScrollView, LogBox } from 'react-native';
import { Badge, List, NativeBaseProvider, Text } from 'native-base';

//logBox only for development must be fixed before production
LogBox.ignoreLogs(['Each child in a list should have a unique "key" prop'])
const { width, height } = Dimensions.get('window')

const CategoryFilter = (props) => {
    // console.log(props)
    return (

        <ScrollView
            // bounces={true}
            horizontal={true}
            style={{
                backgroundColor: "#f2f2f2",
                height: 100,

                marginVertical: 10
            }}
            contentContainerStyle={{ alignItems: 'center' }}
        >
            <NativeBaseProvider>

                <List.Item style={{ margin: 0, padding: 0, borderRadius: 0 }} >

                    <TouchableOpacity
                        // style={{ padding: 5, height: 50, width: 50 }}
                        key={1}
                        onPress={() =>
                            props.categoryFilter('all')
                        }
                    >
                        <Badge
                            style={[styles.center, { magin: 5 },
                            props.active === -1 ? styles.active : styles.inactive
                            ]}
                            colorScheme='info' rounded='md' ml={1}

                        >
                            <Text style={{ color: 'white', padding: 3 }}  >name</Text>
                        </Badge>
                    </TouchableOpacity>
                    {props.categories.map((item) => {
                        return (
                            <TouchableOpacity
                                // style={{ padding: 5, height: 50, width: 50 }}
                                key={item._id._$oid}
                                onPress={() =>
                                    props.categoryFilter(item._id._$oid)
                                }
                            >
                                <Badge
                                    style={[styles.center, { magin: 5, marginRight: 10 },
                                    props.active === -1 ? styles.active : styles.inactive
                                    ]}
                                    colorScheme='info' rounded='md' ml={1}

                                >
                                    <Text style={{ color: 'white', padding: 3 }}  >{item.name}</Text>
                                </Badge>
                            </TouchableOpacity>
                        )
                    })}
                </List.Item>
            </NativeBaseProvider>
        </ScrollView>
    )
}

export default CategoryFilter

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    active: {
        backgroundColor: '#03bafc'
    },
    inactive: {
        backgroundColor: '#a0c1eb'
    }
})
