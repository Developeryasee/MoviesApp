import React, { useEffect, useState } from "react";
import { View, Animated, Dimensions, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useDispatch } from "react-redux";
import Home from '../../assets/Svg/Home.svg'
import Search from '../../assets/Svg/SearchIcon.svg'
import Ticket from '../../assets/Svg/SellTicketIcon.svg'
import { getmovieItems, remove } from "../../Slices/getmovieSlices";
import { Styles } from "./styles";


export default function CustomBar({ state, descriptors, navigation }) {
    const dispatch=useDispatch();
    const { width } = Dimensions.get('window')
    const TAB_BAR_WIDTH = width
    const TAB_WIDTH = (TAB_BAR_WIDTH) / 3
    const [translateX] = useState(new Animated.Value(0))
    const translateTab = (index) => {
        Animated.spring(translateX, {
            toValue: index * TAB_WIDTH,
            useNativeDriver: true,

        }).start();
    }
    useEffect(() => {
        translateTab(state.index)
    }, [state.index])
    return (
        <View
            style={Styles.TabBar}
        >
            <Animated.View style={{
                width: TAB_WIDTH,
                ...StyleSheet.absoluteFillObject,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff'
            }}>
                <Animated.View style={[{ transform: [{ translateX }], }]}>
                    <View style={Styles.Tabs} />
                </Animated.View>
            </Animated.View>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        if (route.name==="Home") {
                            // dispatch(remove())
                            // setTimeout(() => {
                            // dispatch(getmovieItems({ page: "0" }))
                            // }, 500);
                        }
                        navigation.navigate({ name: route.name, merge: true });

                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={Styles.Touch}
                    >

                        <View style={Styles.TabIconView}>
                            {
                                route.name === "Home" ?
                                    <Home width={20} height={20} fill={isFocused ? "#1B2B4D" : "#545454"} />
                                    :
                                    route.name === "Search" ?
                                        <Search width={20} height={20} fill={isFocused ? "#1B2B4D" : "#545454"} /> :
                                        <Ticket width={20} height={20} fill={isFocused ? "#1B2B4D" : "#545454"} />
                            }
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    )
}