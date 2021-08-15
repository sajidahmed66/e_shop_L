import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialIcons } from '@expo/vector-icons'
const Tab = createBottomTabNavigator();


//Screens
import Admin from '../Screens/Admin/Admin';
import User from '../Screens/User/User';
import Cart from '../Screens/Cart/Cart';
import ProductContainer from '../Screens/Products/ProductContainer';


//navigations
import ProductStack from './StackRoutes';



const Main = (props) => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: "#e91e63",
                tabBarInactiveTintColor: "black",
                tabBarShowLabel: false
            }}

        >
            <Tab.Screen
                name="Home"
                component={ProductStack}
                options={{
                    tabBarIcon: ({ color, size }) => (<Entypo name="home" size={24} color={color} />),
                    headerShown: false

                }}
            />
            <Tab.Screen
                name="Admin"
                component={Admin}
                options={{
                    tabBarIcon: ({ color, size }) => (<MaterialIcons name="admin-panel-settings" size={24} color={color} />)
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarIcon: ({ color, size }) => (<Entypo name="shopping-cart" size={24} color={color} />)
                }}
            />
            <Tab.Screen
                name="User"
                component={User}
                options={{
                    tabBarIcon: ({ color, size }) => (<Entypo name="user" size={24} color={color} />)
                }}
            />
        </Tab.Navigator>
    )
}

export default Main