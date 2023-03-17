import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from "react-native";
import Fonts from "../../Themes/Fonts";
import Bridge from "../Bridge";
import Home from "../Home";
import Search from "../Search";
import CustomBar from "./customBar";

export default function BottomTab() {
    const Tab = createBottomTabNavigator();
    const BottomTabs = [
        {
            name: 'Home',
            component: Home,
        },
        {
            name: 'Search',
            component: Search,
        }, {
            name: 'Bridge',
            component: Bridge,
        },
    ]
    return (
        <Tab.Navigator
        tabBar={props => <CustomBar {...props} />}
        screenOptions={{headerTitleStyle:[Fonts.COLORS.black,Fonts.SIZES.h3]}}
        >
            {
                BottomTabs.map((i, key) => (
                    <Tab.Screen name={i.name} component={i.component} key={key} />


                ))}
        </Tab.Navigator>
    )
}