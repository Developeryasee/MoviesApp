import React from "react";
import { View, Text, Image, } from "react-native";
import { Styles } from "../../Container/Home/styles";
import Error from '../../assets/Svg/x-circle.svg'
import Fonts from "../../Themes/Fonts";
import { globalstyle } from "../../Themes/GlobalStyle";
import { styles } from "./styles";
const ActorCard = ({ item, index }) => {

    return (
        <View style={styles.ActorCard}>
            <View style={styles.ImageCard}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.actorImg}
                />

            </View>
            <View style={{ flex: 1, }}>
                <Text style={[Fonts.SIZES.h8, Fonts.COLORS.black]} numberOfLines={1}>{item.name}</Text>
                <Text style={[Fonts.SIZES.h10, Fonts.COLORS.black1]} numberOfLines={1}>{item.citizenship}</Text>
                <Text style={[Fonts.SIZES.h12, Fonts.COLORS.black1,]} numberOfLines={1}>{item.dateofbirth}</Text>
            </View>
        </View>
    )
}
const areEqual = (prevProps, nextProps) => {
    const { item } = nextProps;

    const { item: presIsitem } = prevProps

    const isItemequal = item === presIsitem

    return isItemequal;

};
export default React.memo(ActorCard, areEqual);